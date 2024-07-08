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

export const deleteNews = async(req, res)=>{
  try{
    const id = req.params.id;
    console.log(id);
    const doc = await News.findByIdAndDelete(id);
    if(!doc){
      return res.json({message:"news not found"})
    }
    else{
      return res.json({status:"200", message:"News deleted successfully"})
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json({message:"Server error"})
  }
}
