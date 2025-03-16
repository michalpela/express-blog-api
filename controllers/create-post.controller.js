import Post from "../models/post.js";

export const addPost = async (req, res) => {
    try {
        const {title, content, keyWords} = req.body;
        const newPost = new Post({
            title,
            content,
            keyWords,
        });
        await newPost.save();

        res.status(200).json({message:"Post saved successfully"});
    } catch (error) {
        res.status(500).json({message:"Error creating Post"});
    }
}
