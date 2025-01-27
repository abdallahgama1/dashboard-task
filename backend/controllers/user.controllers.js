import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const updateProfile = async (req, res) => {
    try{
        const allowedFields = [
            "name",  
            "username", 
            "email", 
            "password", 
            "profilePic", 
            "role"
        ];

        const updatedData = {};
        allowedFields.forEach(field => {
            if(req.body[field]) updatedData[field] = req.body[field];
        });

        // to do upload image to cloudinary or any storage service and update the user document

        if(updatedData.password){
            const salt = await bcrypt.genSalt(10);
            updatedData.password = await bcrypt.hash(updatedData.password, salt);
        }

        const user = await User.findByIdAndUpdate(req.user._id, { $set:updatedData}, { new: true }).select("-password");

        res.status(200).json(user);

    }catch(error){
        console.log("error in updateProfile controller ", error.message );
        res.status(500).json({ message:" internal server error " });
    }
}