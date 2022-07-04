import Mongo from "../../Db/Connect/Mongo";
import User from "../../Db/Schema/User";
Mongo()
export default (req,res)=>{
    User.find().then(Setup=>{
        res.status(200).json(Setup)
    })
}