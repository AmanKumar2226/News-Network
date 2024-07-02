import User from '../models/User.js'
import bcrypt from 'bcryptjs'

import jsonwebtoken from "jsonwebtoken";
import mongoose from 'mongoose';

export const addUser = async (req, res) => {
    try {
        let { firstName, lastName, userName, email, password, phoneNumber, address, dateOfBirth } = req.body;
        if (!(firstName && lastName && userName && email && password && phoneNumber && address && dateOfBirth)) {
          res.status(400).send("All fields are required");
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          res.status(401).send("The user with this email already exists");
        }
    
        const myEncPassword = await bcrypt.hash(password, 10);
        const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].path : '';
        const banner = req.files['banner'] ? req.files['banner'][0].path : '';
        if (!profilePicture || !banner) {
          return res.status(400).send("Both profile picture and banner are required");
        }
        // Handle potential upload errors
        if (req.fileValidationError) {
          return res.status(400).send(req.fileValidationError);
        } else if(!profilePicture) {
          return res.status(400).json({ message: 'Profile picture is required' });
        }
    
        else if(!banner) {
          return res.status(400).json({ message: 'Banner is required' });
        }
    
        let user = await User.create({
          firstName,
          lastName,
          userName,
          email,
          password: myEncPassword,
          phoneNumber,
          address,
          dateOfBirth: new Date(dateOfBirth), // Parse date string to Date object
          profilePicture: profilePicture ? `http://localhost:8080/${profilePicture}` : '',
            banner: banner ? `http://localhost:8080/${banner}` : '',
        });
    
        const jwt = jsonwebtoken;
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          "shhhh"
        );
        user.token = token;
    
        res.status(201).json(user);
      } catch (err) {
        console.log(err);
      }
    }

   export const login =  async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send("send all data");
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(200).json({
          success: false,
          message:"user not found"
        });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
          return res.status(401).json({
              success: false,
              message: "Incorrect password entered. Please check"
          });
      }
  
      if (user && (await bcrypt.compare(password, user.password))) {
        const jwt = jsonwebtoken;
        const token = jwt.sign(
          {
            id: user._id,
          },
          "shhhh"
        );
        user.token = token;
        console.log(user.token);
  
        const options = {
          httpOnly: true,
        };
        res.status(200).json({
          success: true,
          token,
          user,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }; 

export const getUsers = async (req, res) => {
  try {
    const userId = req.user;
    const user = await User.findById(userId.id)
    console.log(user,'ppppppppppppppppppppp')
    return res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    console.log(error)
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.user;
    // Assuming req.user contains the authenticated user's information
    console.log(userId)
    // Extract fields that can be updated
    const { firstName, lastName, userName, email, phoneNumber, address, dateOfBirth } = req.body;
    // Find the user by userId
    let user = await User.findById(userId.id)

    // If user not found
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Update user object with new values
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (userName) user.userName = userName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (address) user.address = address;
    if (dateOfBirth) user.dateOfBirth = new Date(dateOfBirth); // Parse date string to Date object
    
    // Save updated user to the database
    user = await user.save();

    // Optionally, you can generate a new JWT token here if needed
    const jwt = jsonwebtoken;
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      "shhhh"
    );
    user.token = token;

    // Respond with updated user data
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteUser = async(req, res)=>{
  const userId = req.user.id;
  console.log('Received ID:', userId); // Debugging line
  const objectId =new mongoose.Types.ObjectId(userId); 
    try{
   await User.findByIdAndDelete(objectId);
   res.status(200).send({ message: 'User deleted successfully' });
  }
  catch(err){
    console.log("error deleting user"+err);
  }
}
