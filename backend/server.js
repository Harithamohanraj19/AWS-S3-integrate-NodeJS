import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import uploadRoutes from "./routes/uploadRoutes.js";


dotenv.config();

const app = express();


app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

app.use('/api/upload',uploadRoutes);


app.get("/", (req, res) => {
  res.send(" Backend running");
});
 

mongoose    
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected"))
    .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log("server running");
});