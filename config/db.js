import mongoose from "mongoose"

const connectDB = async() =>{
   try{
     const conn = await mongoose.connect(process.env.MONGOURL)
     console.log('connected to mongodb database')
   }catch(error){
     console.log("Error in MongoDB",error)
   }
}

export default connectDB;