// src/context/FavoritesContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const userid = localStorage.getItem('id') ? localStorage.getItem('id').replace(/"/g, '') : '';

  // Fetch favorite IDs when the component mounts
  useEffect(() => {
    if (userid) {
      axios
        .get(`http://localhost:8080/api/nni/get-favorite/${userid}`)
        .then((response) => {
          const ids = response.data.map((fav) => fav.newsId);
          setFavoriteIds(ids);
        })
        .catch((error) => {
          console.error('Error fetching favorites:', error);
        });
    }
  }, [userid]);

  const addFavorite = (newsId) => {
    setFavoriteIds((prevIds) => [...prevIds, newsId]);
  };

  const removeFavorite = (newsId) => {
    setFavoriteIds((prevIds) => prevIds.filter((id) => id !== newsId));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
