import News from "../models/News.js";

export const addNews = async (req, res) => {
  try {
    console.log(req.file, req.body);
    let news = new News(req.body);
    news.image = req.file.path;
    const doc = await news.save();
    console.log(doc);
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getNews = async (req, res) => {
  try {
    const docs = await News.find({});
    res.json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
