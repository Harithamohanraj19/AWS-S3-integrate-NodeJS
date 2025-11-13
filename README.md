# AWS S3 File Uploader (Node.js + React)

A full-stack application that allows users to upload files directly to **Amazon S3** using **pre-signed URLs** for secure and efficient file transfer.

---

##  Features

- Generate **AWS S3 pre-signed URLs** using Node.js & Express.
- Upload files directly from the frontend to **Amazon S3** without passing through the backend.
- Secure credentials using environment variables (`.env`).
- Automatic metadata saving to MongoDB (optional).
- Works with large files using `axios` progress tracking.

---

## Tech Stack

### Backend
- **Node.js + Express**
- **AWS SDK v3**
- **MongoDB (Mongoose)** 
- **dotenv** for environment variable management
- **CORS** for cross-origin requests

### Frontend
- **React.js (Vite)**
- **Axios** for HTTP requests
- Simple file upload UI

---

---

##  Setup Instructions

### Clone the repository

```bash
git clone git@github.com:Harithamohanraj19/AWS-S3-integrate-NodeJS.git
cd AWS-S3-integrate-NodeJS

## Setup Backend

### Navigate to the backend folder
```bash
cd backend
npm install

### Navigate to the backend folder

```bash
Set up .env files
AWS_REGION=eu-north-1
AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS_KEY
S3_BUCKET_NAME=bucket-name
MONGODB_URI=mongodb+srv://your-mongodb-uri
PORT=5000

Run the backend server
``bash
node server.js

## Setup Frontend

### Navigate to the frontend folder
```bash
cd backend
npm install

Run the frontend server
``bash
npm run dev

## AWS CONFIGURATION

###  Create an IAM User

Go to **[AWS IAM Console](https://console.aws.amazon.com/iam/home#/users)**  and create user
Copy and save your:
- **Access Key ID**
- **Secret Access Key**
---

### Create an S3 Bucket
 Open **[Amazon S3 Console](https://s3.console.aws.amazon.com/s3/home)** and create bucket

License
This project is open source and available under the MIT License.



