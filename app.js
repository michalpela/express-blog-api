import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes/index.js';
import Post from './models/post.js';
import connectToDB from "./config/db.js";


const app = express();
dotenv.config({path: `./config/.env`})

app.set('views', "views")
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static("public"))

connectToDB();

app.post('/admin/createPost', async (req, res) => {
    try {
      const {title, content, keyWords} = req.body;

      const newPost = new Post({
        title,
        content,
        keyWords,
      });
      await newPost.save();

      res.status(200).json({message:"Post saved successfully"});
    } catch (error) {
      res.status(500).json({message:"Error creating Post"});
    }
})

app.use('/', indexRouter)

app.listen(process.env.PORT, () =>{
  console.log(`Server started on port ${process.env.PORT}`);
});