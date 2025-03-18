import Post from "../models/post.js";

export const updatePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const updateData = req.body;

        const updatedPost = await Post.findByIdAndUpdate(postId, updateData, {
            new: true,
            runValidators: true
        });

        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json({ message: "Post successfully updated", data: updatedPost });

    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({ message: "Error updating post" });
    }
};