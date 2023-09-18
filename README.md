## Password-Protected File Sharing

### Description

**Password-Protected File Sharing** is a simple and secure file sharing application built using Node.js and Express.js. It allows you to share files with others while ensuring that only authorized users with the correct password can access them. This project is designed with simplicity and security in mind, making it an ideal solution for sharing sensitive or confidential files.

### Key Features

- **Password Protection :** Files are protected with a password that only you and authorized recipients know, ensuring that your files remain secure.

- **Easy-to-Use Interface :** The user-friendly interface makes it easy to upload and share files with others, even if they are not tech-savvy.

- **Customizable :** You can customize the application to match your branding and requirements.

- **Secure File Storage :** Files are stored securely on the server and can only be accessed with the correct password.

- **No Registration Required :** There's no need for users to create accounts or provide personal information. Simply share the password with those you want to grant access.

- **Scalable :** Built on the robust Express.js framework, this application can be easily scaled to meet your growing file sharing needs.

### Installation

To run the **Password-Protected File Sharing** application locally, follow these steps:

1. Clone the repository to your local machine.

    ```
    git clone https://github.com/yourusername/pwd-protected-file-sharing.git
    ```

2. Install the application dependencies.

    ```
    npm install
    ```

3. Create a .env file in the project root directory and configure it with your settings. You can use the .env.example file as a template.

    ```
    DATABASE_URL = mongodb://0.0.0.0:27017/<database-name>
    PORT = 3000
    ```

4. Start the application.

    ```
    npm start
    ```

5. Open your browser and navigate to `[http://localhost:3000]`.

### Usage

1. **Upload Files :** Click the "Upload" button to select files from your device. You can upload one or multiple files at once.

2. **Set Password :** Choose a strong password to protect your files. This password will be required to access the shared files.

3. **Share Link :** After uploading, you will receive a unique shareable link. Share this link with those you want to grant access to the files.

4. **Access Files :** To access the shared files, users need to visit the link you shared and enter the correct password.

