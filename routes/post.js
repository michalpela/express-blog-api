import { Router } from 'express';
import Post from "../models/post.js";

import {addPost} from "../controllers/create-post.controller.js";
import {getPosts} from "../controllers/get-posts-controller.js";
import {getPost} from "../controllers/get-post-controller.js";



const router = Router();

router.post(
    '/admin/createPost',
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


export default router;