import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
console.log('db connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const server = express();

server.use(cors())
server.use(bodyParser.json())

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String,
    phoneNumber: String,
  });

  const User = mongoose.model('User', userSchema);

server.post('/api/demo', async(req, res)=>{

    let user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.phoneNumber = req.body.phoneNumber;
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

server.get('/api/demo',async(req,res)=>{
  const docs = await User.find({})
  res.json(docs);
})

server.listen(8080, () =>{
    console.log("server started")
})