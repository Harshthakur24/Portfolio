import {connect as _connect} from "mongoose"

const connectDb = async()=>{
    try{
        const connect = await _connect("mongodb+srv://VishalSharma:ruddo@cluster2.fcw22a5.mongodb.net/");
        if(connect.suuccess) {
            console.log("Successfully connected")
        }
        console.log("Db connected ",connect.connection.host,connect.connection.name);
    }catch(err){
         console.log(err);
         process.exit(1);
    }
}

export default connectDb;
