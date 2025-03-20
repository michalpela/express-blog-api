import { Router } from 'express';
import {addPost} from "../controllers/create-post.controller.js";
import {getPosts} from "../controllers/get-posts.controller.js";
import {getPost} from "../controllers/get-post.controller.js";
import {deletePost} from "../controllers/delete-post.controller.js";
import {updatePost} from "../controllers/update-post.controller.js";



const router = Router();

router.post(
    '/createPost',
    addPost
)
router.get(
    '/get-all-posts',
    getPosts
)
router.get(
    '/get-post/:postId',
    getPost
)
router.delete(
    '/delete-post/:postId',
    deletePost
)
router.put(
    '/update-post/:postId',
    updatePost
)


export default router;