const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js');
const mongoose = require('mongoose');

app.set('views', "views")
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

const Post = require('./models/Post');
mongoose.connect('mongodb://127.0.0.1:27017/blogDB');

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

app.listen(3000, () =>{
  console.log("Server started on port 3000")
});