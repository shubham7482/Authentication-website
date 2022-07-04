
import Mongo from "../../Db/Connect/Mongo"
import User from "../../Db/Schema/User"
import bcrypt, { compare, hash } from "bcrypt"
import jwt from 'jsonwebtoken'
Mongo()
export default async(req,res)=>{
    const {Email,Password}=req.body
    try{
if(!Email,!Password){
    return res.status(422).json({error:'fill input all'})
}
const match=await User.findOne({Email})
if(!match){
    return res.status(404).json({'error':'user dont exist'})
}
bcrypt.genSalt(10,function(err,salt){
    bcrypt.hash('superSecret',salt,function(err,hash){
        User.Password=hash;
        
        res.status(201).json({success:true,massage:'create User successfull'})
    })
    })
    bcrypt.compare(req.body.password,'superSecret',function(err,res){
        if(req.body.Password !=User.Password){
            res.status(404).json({massage:'email and password don not match'})
        }else{
            const Domatch= bcrypt.compare(Password,User.Password)
            if(Domatch){
                const token= jwt.sign({UserId:User_id},process.env.Jwt_SECRET,{
                    expiresIn:'1d'
                })
                res.status(201).json({token})
            }
        }
    })


    }catch(error){
console.log(error)
    }
}