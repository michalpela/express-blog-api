import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path: `./config/.env`})
import index from './routes/index.js';
import post from './routes/post.js';
import connectToDB from "./config/db.js";

connectToDB()

const app = express();

app.set('views', "views")
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static("public"))


app.use('/', index)
app.use('/', post)

app.listen(process.env.PORT, () =>{
  console.log(`Server started on port ${process.env.PORT}`);
});