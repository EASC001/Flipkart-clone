import mongoose from "mongoose"

const schema= new mongoose.Schema({
    firstname:{
        type:String,
        // required:true
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        // required:true,
        unique:true
    },
    role:{
        type:String,
        default:"user"
    },
    contact:{
        type:String,
        required:true,
        unique:true
    },
},{Timestamp:true})

export const User=mongoose.model("User",schema)