import express from "express";
import { getNews } from "../Controllers/newsControllers.js";


const route = express.Router();

route.get("/news", getNews);

export default route;