import Post from "../models/post.js";

export const getPost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const postFound = await Post
            .findById(postId)
            .populate({
                path: 'comments', select: 'author content date',
                populate: { path: 'author', select: 'email' }
            })
            .exec();
        if (!postFound) {
            return res.status(404).json({message:"Not Found"});
        }
        res.json(postFound);
    } catch (error) {
        res.status(500).json({message: "Error downloading post"});
    }
}