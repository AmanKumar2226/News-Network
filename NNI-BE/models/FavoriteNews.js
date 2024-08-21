import mongoose from "mongoose";

const favoriteNewsSchema = new mongoose.Schema({
    userId: {
      type : mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    newsId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "News",
      required: true,
    },
    favoritedAt:{
      type: Date,
      default: Date.now,
    }
  });
  
  const FavoriteNews = mongoose.model("FavoriteNews", favoriteNewsSchema);

  export default FavoriteNews;