# AWS S3 File Uploader (Node.js + React)

A full-stack integration that allows users to upload files directly to **Amazon S3** using **pre-signed URLs** for secure and efficient file transfer.

**Features**

- Generate **AWS S3 pre-signed URLs** using Node.js & Express.
- Upload files directly from the frontend to **Amazon S3** without passing through the backend.
- Secure credentials using environment variables (`.env`).
- Automatic metadata saving to MongoDB (optional).
- Works with large files using `axios` progress tracking.


**Backend**
- **Node.js + Express**
- **AWS SDK v3**
- **MongoDB (Mongoose)** 
- **dotenv** for environment variable management
- **CORS** for cross-origin requests

**Frontend**
- **React.js (Vite)**
- **Axios** for HTTP requests
- Simple file upload UI

**Installation & Setup**

Clone the repository

`git@github.com:Harithamohanraj19/AWS-S3-integrate-NodeJS.git`

Install dependencies

`npm install` with react, express, axios, dotenv, and @aws-sdk/client-s3

Create an inside API key in the .env file

`AWS_REGION=eu-north-1`
`AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY_ID`
`AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS_KEY`
`S3_BUCKET_NAME=bucket-name`
`MONGODB_URI=mongodb+srv://your-mongodb-uri`

**AWS CONFIGURATION**

Create an IAM User
Go to **[AWS IAM Console](https://console.aws.amazon.com/iam/home#/users)**  and create user
Copy and save your:
- **Access Key ID**
- **Secret Access Key**

Create an S3 Bucket
Open **[Amazon S3 Console](https://s3.console.aws.amazon.com/s3/home)** and create bucket


**Contributing**

Feel free to fork the repo, create a branch, and open a pull request!
If you find bugs or want to add improvements, contributions are always welcome.
