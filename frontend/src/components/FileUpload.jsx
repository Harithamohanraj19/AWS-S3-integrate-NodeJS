import react from  "react";
import { useState } from "react";
import axios from "axios";

export default function FileUpload() {

const[file, setFile] = useState(null);
const[status, setStatus] = useState("");

const handleUpload =  async() => {
    if(!file) return alert("Select a file");
    
    try {
        setStatus("Uploading..");

        const { data } = await axios.post("http://localhost:5000/api/upload/presign" ,{
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
        });
        
       
        await axios.put(data.url, file, {
          headers: {
            "Content-Type": file.type, 
          },
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded / e.total) * 100);
            setStatus(`Uploading... ${percent}%`);
          },
        });

        await axios.post("http://localhost:5000/api/upload/save",{
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
        });
      setStatus("Uploaded");
      setFile(null)
    } 
    catch(err){
      console.error(err);
      setStatus("Upload Failed");
    }

}


  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow space-y-6">
      <div className="flex flex-col items-center space-y-3">
        <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
        <button
          onClick={handleUpload}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Upload
        </button>
        <p className="text-sm text-gray-600">{status}</p>
      </div>

      {/* <div>
        <h2 className="text-lg font-semibold mb-2">Uploaded Files</h2>
        <ul className="divide-y divide-gray-200">
          
            <li key=""  className="py-2 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800"></p>
                <p className="text-sm text-gray-500">
                 
                </p>
              </div>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View
              </a>
            </li>
         
        </ul>
      </div> */}
    </div>
  );
}
