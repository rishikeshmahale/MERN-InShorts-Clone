import express from "express";
import cors from "cors";

import Connection from "./Database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";
import dotenv from "dotenv";

const app = express();
const port = 8000;

dotenv.config();

app.use(cors());
app.use("/", Route);

app.get("/", (req, res) => {
    res.send("Welcome to the backend part");
})

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username , password);

app.listen(port, () => {
    console.log(`Server is Running at port ${port}`);
})

DefaultData();

// 54:00



// MongoDB Credentials

// Username : inshortsClone
// Password : vbxGMi1Bevdbh1oh
// IP Address : 106.193.180.21/32


