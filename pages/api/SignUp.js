import Mongo from "./../../Db/Connect/Mongo"
import User from  "./../../Db/Schema/User"
import bcrypt from "bcrypt"
Mongo()
export default async(req,res)=>{
    const {Name,Email,Phone,Password}=req.body
    try{
if(!Name,!Email,!Phone,!Password){
    return res.status(422).json({error:"Fill all the input"})
}
const Sign=await User.findOne({Email})
if(Sign){
    return res.status(422).json({error:'email already exist'})
}
const hashedPassword=await bcrypt.hash(Password,10)
const Newuser=await new User({
    Name,
    Email,
    Phone,
    Password:hashedPassword
}).save()
console.log(Newuser)
res.status(201).json({massage:'SignUp sucess....'})
    }catch(error){
console.log(error)
    }
}