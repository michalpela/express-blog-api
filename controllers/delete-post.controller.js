import Post from '../models/post.js';

export const deletePost = async (req, res) => {
    try {
        const postId = req.params.postId;
        const deletedPost = await Post.findByIdAndDelete(postId);
        if(!deletedPost) {
            return res.status(404).json({message: `Post with id ${postId} not found`});
        }
        return res.status(200).json({message: `Deleted post with id: ${postId}`});
    } catch(error){
        return res.status(500).json({message: "Error deleting post"});
    }
}