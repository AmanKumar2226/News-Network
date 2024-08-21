import mongoose from "mongoose";
import FavoriteNews from "../models/FavoriteNews.js";

export const addFavoriteNews = async (req, res)=>{
        const { userId, newsId} = req.body;
        try{
        const favoriteExist = await FavoriteNews.findOne({ userId, newsId });
        if(favoriteExist){
            return res.status(400).json({ message: "News already favorite" });
        } 
        const newFavorite = new FavoriteNews({userId, newsId});
        const savedFavorite = await newFavorite.save()
        return res.json(savedFavorite)
        }
        catch(err){
            res.status(500).json({error: err.message});
        }
}

export const getFavoriteNews = async (req, res)=>{
    try{
        const favorite = await FavoriteNews.find({userId: req.params.userId}).populate('newsId')
        res.json(favorite)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

export const deleteFavoriteNews = async (req, res)=>{
    try{
        const favorite = await FavoriteNews.findById(req.params.favoriteId)
        if(!favorite){
            res.status(404).json({message: "News not found"})
        }
        await favorite.deleteOne();
        res.json({message: "News Removed"})
    }
    
    catch(err){
        res.status(500).json({error: err.message})
    }
}