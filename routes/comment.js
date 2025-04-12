import {Router} from 'express';
import {addComment} from '../controllers/add-comment.controller.js';
import {getComments} from '../controllers/get-comments.controller.js';
import {authenticateToken} from '../middleware/authenticate-token.js';
import {updateComment} from '../controllers/update-comment.controller.js';
import {isAuthor} from '../middleware/is-author.js';
import {deleteComment} from '../controllers/delete-comment.controller.js';


const router = Router();

router.get(
    '/posts/:postId/comments',
    getComments
);

router.post(
    '/posts/:postId/comment',
    authenticateToken,
    addComment
)
router.put(
    '/posts/:postId/update-comment/:commentId',
    authenticateToken,
    isAuthor,
    updateComment
)
router.delete(
    '/posts/:postId/delete-comment/:commentId',
    authenticateToken,
    isAuthor,
    deleteComment
)


export default router;