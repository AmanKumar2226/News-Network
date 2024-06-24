import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  confirmPassword: String,
  phoneNumber: String,
  address: String,
  dateOfBirth: String,
  profilePicture: {
    type: String, // Store the path to the uploaded profile picture
    default: "",
  },
  banner: {
    type: String, // Store the path to the uploaded banner
    default: "",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
