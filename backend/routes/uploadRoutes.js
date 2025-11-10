import express from "express";
import { generatePresignedUrl, getFileUrl } from "../services/s3Service.js";
import File from "../model/File.js";


const router = express.Router();

router.post("/presign", async (req, res) => {
    try {
        const {fileName,fileType,fileSize} = req.body;
        const url = await generatePresignedUrl(fileName,fileType);
        res.json({url});
    }
    catch(err){
        res.status(500).json({ error: err.message});
    }
});

router.post("/save", async (req, res) => {
    try {
        const {fileName,fileType,fileSize} = req.body;
        const s3url = getFileUrl(fileName);
        const file = await File.create({fileName,fileType,fileSize,s3url});
        res.json(file);
    }
    catch(err){
        res.status(500).json({ error: err.message});
    }
});

export default router;