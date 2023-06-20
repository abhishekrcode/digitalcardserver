
import mongoose from "mongoose";

 const Connection = async(username, password) => {
    
    const URL=`mongodb+srv://${username}:${password}@data.qpky1yt.mongodb.net/?retryWrites=true&w=majority`; 

    try {
       await mongoose.connect(URL,{useNewUrlParser:true});
       console.log("Database Connected Successfully")
    } catch (error){
        console.log("Error while connecting with the database",error);

    }
}

export default Connection;