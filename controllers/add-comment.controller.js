import Comment from '../models/comment.js';
import Post from "../models/post.js";
import User from '../models/user.js';

export const addComment = async (req, res) => {
    try {
        const { postId } = req.params;
        const { content } = req.body;

        const post = await Post.findById(postId).exec()

        if (!post) return res.status(404).json({message: "Post not found"});

        const user = await User.findOne({email: req.user.email}).exec();
        if (!user) return res.status(404).json({message: "User not found"});
        

        const newComment = new Comment({
            post: postId,
            author: user._id,
            content
        })

        await newComment.save();

        post.comments.push(newComment._id);

        await post.save()
        res.status(201).json({message:"Comment saved", newComment: newComment});
    } catch(error) {
        res.status(500).json({message: "Error fetching comments"});
    }
}