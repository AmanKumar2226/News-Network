import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";

//Image storage engine(saving image to uploads folder & rename it)
const storage = multer.diskStorage({
  destination: function(req, file, cb){
      cb(null, "./uploads");
  },
  filename: function(req, file, cb){
      cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({storage:storage})




main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demo");
  console.log("db connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use('/uploads', express.static('uploads'))

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confirmPassword: String,
  phoneNumber: String,
});

const User = mongoose.model("User", userSchema);

server.post("/api/demo", async (req, res) => {
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
});

server.get("/api/demo", async (req, res) => {
  const docs = await User.find({});
  res.json(docs);
});

const newsSchema = new mongoose.Schema({
  url: String,
  source: String,
  title: String,
  author: String,
  description: String,
  content: String,
  publishedAt: String,
  image: String,
})



const News = mongoose.model("News", newsSchema);

server.post("/api/add-news", upload.single("image"), async (req, res) => {

  console.log(req.file, req.body)
  let news = new News();
  news.url = req.body.url;
  news.source = req.body.source;
  news.author = req.body.author;
  news.title = req.body.title;
  news.description = req.body.description;
  news.content = req.body.content;
  news.publishedAt = req.body.publishedAt;
  news.image = req.file.path;
  try {
    const doc = await news.save();
    console.log(doc);
    res.json(doc);
  } catch (err) {
    console.log(err);
  }
});

server.get("/api/add-news", async (req, res) => {
  const docs = await News.find({});
  res.json(docs);
});

server.listen(8080, () => {
  console.log("server started");
});
