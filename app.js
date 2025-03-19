import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path: `./config/.env`})

import post from './routes/post.js';
import connectToDB from "./config/db.js";

await connectToDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static("public"))


app.use('/api/', post)

app.listen(process.env.PORT, () =>{
  console.log(`Server started on port ${process.env.PORT}`);
});