import Post from "../models/post.js";

export const getPosts = async (req, res) => {
        try {
            const limit = req.params.limit
            const foundPosts = await Post.find().limit(limit);
            let postsCount
            postsCount = foundPosts.length
            req.posts = foundPosts;
            req.postCount = postsCount;

            return res.status(200).json({postsCount: postsCount, data: foundPosts});

        } catch (error) {
            res.status(500).json({message: "Error downloading Post"});
        }
}
