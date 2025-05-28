import { Router } from 'express';
import {addPost} from "../controllers/create-post.controller.js";
import {getPosts} from "../controllers/get-posts.controller.js";
import {getPost} from "../controllers/get-post.controller.js";
import {deletePost} from "../controllers/delete-post.controller.js";
import {updatePost} from "../controllers/update-post.controller.js";
import {isAdmin} from "../middleware/is-admin.js";
import {authenticateToken} from "../middleware/authenticate-token.js";



const router = Router();

router.post(
    '/createPost',
    authenticateToken,
    isAdmin,
    addPost
)
router.get(
    '/get-all-posts/:limit?',
    getPosts
)
router.get(
    '/get-post/:postId',
    getPost
)
router.delete(
    '/delete-post/:postId',
    authenticateToken,
    isAdmin,
    deletePost
)
router.put(
    '/update-post/:postId',
    authenticateToken,
    isAdmin,
    updatePost
)


export default router;