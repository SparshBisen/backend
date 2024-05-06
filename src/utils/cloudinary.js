import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';        //https://nodejs.org/docs/latest/api/fs.html
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECREAT_KEY 
});


const uploadCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        //uploading the file to cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"    // here what type of file is supposed to uploaded.
        })
        //file has been uplaoded
        console.log("file has been uploaded", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)  // this will remove the locally saved file from the server as the uploading process is failed.
        return null;
    }
}
export {uploadCloudinary}

