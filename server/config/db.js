import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`🙃🙃 Mongo DB is connected ${conn.connection.host} 🙃🙃`);
  } catch (Error) {
    console.log(`🏮🏮🏮 ${Error} 🏮🏮🏮`);
  }
};
export default connectDB;
