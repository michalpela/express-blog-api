import Post from "../models/post.js";

export const getPosts = async (req, res) => {
        try {
            const limit = req.params.limit ? req.params.limit : 0;
            const foundPosts = await Post
                .find()
                .sort({date: -1})
                .select('title content date keyWords')
                .limit(limit);
            const postsCount  = foundPosts.length
            req.posts = foundPosts;
            req.postCount = postsCount;

            return res.status(200).json({postsCount: postsCount, data: foundPosts});

        } catch (error) {
            res.status(500).json({message: "Error downloading Post"});
        }
}
