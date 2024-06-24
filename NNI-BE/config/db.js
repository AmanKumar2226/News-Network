import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/demo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (error) {
    console.error("Could not connect to database", error);
    process.exit(1); // Exit with failure
  }
}

export default connectDB;
