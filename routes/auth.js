import {Router} from "express";
import {body} from "express-validator";
import {register} from "../controllers/register.controller.js";
import {login} from "../controllers/login.controller.js";
import {refreshToken} from "../controllers/refresh-token.controller.js";

const router  = Router();

router.post(
    '/register',
    body('email').isEmail(),
    body('password').isLength({min:8}),
    register
)

router.post(
    '/login',
    body('email').isEmail(),
    body('password').isLength({min:8}),
    login
)
router.post(
    '/refresh-token',
    refreshToken,
)
export default router;