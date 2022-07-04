import mongoose from "mongoose";
function Mongo(){
    if(mongoose.connections[0].readyState){
        console.log('already connect')
        return
    }
    mongoose.connect(process.env.Mongo_URI,{
        useNewUrlParser:true
    })
    mongoose.connection.on('connect',()=>{
        console.log('connect...')
    })
    mongoose.connection.on('error',(error)=>{
        console.log(error)
    })
}
export default Mongo