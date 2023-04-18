
import News from "../models/newsSchema.js";

export const getNews = async (req , res) => {
    try {
        let data = await News.find({});
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({message : err.message});
        console.log("Error : ", err.message);
   }
}


