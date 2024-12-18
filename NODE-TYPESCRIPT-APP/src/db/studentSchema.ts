import mongoose  from "mongoose";

const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    department:{
        type:String,
        required:true
    }
})

export const studentModel=mongoose.model("Student",studentSchema)

