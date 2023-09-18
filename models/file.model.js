const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true
    },
    password:String,
    downloadCount: {
        type: Number,
        default: 0,
        required: true
    }
});

module.exports = mongoose.model("File", fileSchema);