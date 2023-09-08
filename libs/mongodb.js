import mongoose from "mongoose";
 let isConnect = false;

const connectMongoDB = async () => {
   if (isConnect) {
    console.log("MongoDB Already Connected!.");
    return;
   }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnect= true;
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;