import mongoose from "mongoose";
const {Schema, model} = mongoose;

const postSchema = new Schema({
    title: String,
    content: String,
    keyWords: String,
    date: {type: Date, default: Date.now}
})

const Post = model('Post', postSchema);
export default Post
