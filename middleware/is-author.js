import Comment from '../models/comment.js';
import User from "../models/user.js";

export const isAuthor = async (req, res, next) => {
    const {commentId} = req.params;
    const userEmail = req.user.email;

    const user = await User.findOne({email: userEmail}).exec()


    try {
        const comment = await Comment.findById(commentId);

        if (!comment) return res.status(404).json({message: 'Comment not Found'});

        if (comment.author.toString() !== user._id.toString()) return res.status(403).json({message: 'You are not authorized'});

        req.comment = comment;
        next();

    } catch (error) {
        return res.status(401).json({message: "Unauthorized"});
    }

}

