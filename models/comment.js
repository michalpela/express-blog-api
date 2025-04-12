import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const commentSchema = new Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    date: {type: Date, default: Date.now},
})
const Comment = model('Comment', commentSchema);
export default Comment