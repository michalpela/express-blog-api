export const updateComment = async (req, res) => {
    const {content} = req.body;

    try {
        req.comment.content = content;

        await req.comment.save();

        res.status(200).json({ message: 'Comment updated', comment: req.comment });

    } catch(error) {
        res.status(500).json({message: "Error updating comment"});
    }
}