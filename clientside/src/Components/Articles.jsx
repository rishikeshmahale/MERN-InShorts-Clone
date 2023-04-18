import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getNews } from "../Service/api.js";
import Article from "./Article.jsx";

const Articles = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    dailyNews();
  }, []);

  const dailyNews = async () => {
    let response = await getNews();
    console.log(response.data);
    setNews(response.data);
  };

  return (
    <>
      <Box>
        {news.map((i, index) => {
          const {title,description,url,link,author,timestamp,publisher} = i;

          return (
            <Article key={index}
              title={title}
              description={description}
              url={url}
              link={link}
              author={author}
              timestamp={timestamp}
              publisher={publisher}
            />
          );
        })}
      </Box>
    </>
  );
};

export default Articles;
