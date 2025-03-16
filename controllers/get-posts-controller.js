import Post from "../models/post.js";

export const getPosts = async (req, res) => {
        try {
            await Post.find();
            let postCount
            postCount = await Post.countDocuments()
            res.status(200).json({message: `Successfully found ${postCount} posts` });
        } catch (error) {
            res.status(500).json({message: "Error downloading Post"});
        }
}