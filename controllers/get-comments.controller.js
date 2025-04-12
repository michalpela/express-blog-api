import Comment from '../models/comment.js';

export const getComments = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.find({ post: postId }).sort({ date: -1 })

        res.status(200).json(comments);

    } catch(error) {
        res.status(500).json({message: "Error fetching comments"});
    }
}