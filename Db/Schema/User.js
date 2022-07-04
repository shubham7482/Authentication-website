import mongoose from "mongoose";
import bcrypt from "bcrypt"
const User=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Password:{
        type:String
    },
    role:{
        type:String,
        required:true,
        default:'user',
        enum:['user','admin','root']
    }
    
},
{
    timestamps:true
})
// User.pre('Save',async function(){
//     try{
//         const salt=await bcrypt.genSalt(10)
//         const hashedPassword=await bcrypt.hash(this.Password,salt)
//         this.Password=hashedPassword
//     }catch(error){
// console.log(error)
//     }
// })

export default mongoose.models.user||mongoose.model('user',User)
