import mongoose from "mongoose";


const fileSchema = new mongoose.Schema({
    fileName: String,
    fileType: String,
    fileSize: Number,
    s3Url   : String,
    uploadedAt: { type: Date, default: Date.now},
});

export default mongoose.model("File", fileSchema);


