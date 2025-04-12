import mongoose from "mongoose";

export const deleteComment = async (req, res) => {
    const commentId = req.comment._id;

    try {
        await req.comment.deleteOne();

        await mongoose.model('Post').updateOne(
            { comments: commentId },
            { $pull: { comments: commentId } },
        );
        res.status(200).json({ message: "Comment deleted"})
    } catch(error) {
        res.status(500).json({message: "Error deleting comment"});
    }
}