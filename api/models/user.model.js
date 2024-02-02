import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        default: "https://i.pinimg.com/736x/dd/c2/ba/ddc2baeed75b0aa527c107fab156c584.jpg"
    }
}, { timestamps: true});

const User = mongoose.model('User', userSchema)

export default User;