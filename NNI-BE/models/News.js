import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  url: String,
  source: String,
  title: String,
  author: String,
  description: String,
  content: String,
  publishedAt: String,
  image: String,
});

const News = mongoose.model("News", newsSchema);

export default News;
