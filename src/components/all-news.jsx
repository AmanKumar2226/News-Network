import React, { useEffect } from "react";
import NewsCard from "./news-card";
import axios from "axios";

export default function AllNews(){
    

    
    return(
        <>
            <div className="px-10 py-10 flex flex-col gap-5 "> 
                <h1>All News</h1>
                <div className="card-container  ">
                <NewsCard />
                </div>
                

            </div>
        </>
    );
}