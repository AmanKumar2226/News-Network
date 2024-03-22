import React, { useEffect } from "react";
import NewsCard from "./news-card";

export default function AllNews(){

    return(
        <>
            <div className="py-10 flex flex-col gap-5 "> 
                <h1>All News</h1>
                <div className="card-container flex flex-row gap-5 flex-wrap">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                </div>
                

            </div>
        </>
    );
}