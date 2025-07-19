import mongoose from "mongoose";

const connectDB = async (DATABASEURL)=>{
    try {
        const dbOption ={
            dbName :"authsystem",
        }
       const response =  await mongoose.connect(DATABASEURL,dbOption);
       if(response){
        console.log("Database connected!")
       }else{
        console.log("Database Not Connected!")
       }
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB;