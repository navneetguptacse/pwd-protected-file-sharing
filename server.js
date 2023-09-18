require("dotenv").config();

const multer = require("multer");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads" });
const File = require("./models/file.model");

mongoose.connect(process.env.DATABASE_URL);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), async (req, res) => {
  const fileData = {
    path: req.file.path,
    originalName: req.file.originalname,
  };
  
  if (req.body.password && req.body.password.length > 0) {
    fileData.password = await bcrypt.hash(req.body.password, 10);
  }

  const file = await File.create(fileData);
  res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` });
});

app.route("/file/:id").get(downloadHandler).post(downloadHandler);

async function downloadHandler(req, res) {
  const file = await File.findById(req.params.id);
  console.log(file);
  if (file.password != null) {
    if (req.body.password == null) {
      return res.render("password");
    }

    if (!(await bcrypt.compare(req.body.password, file.password))) {
      return res.render("password", { error: true });
    }
  }

  file.downloadCount++;
  await file.save();
  console.log(file.downloadCount);

  res.download(file.path, file.originalName);
}

app.listen(process.env.PORT);
