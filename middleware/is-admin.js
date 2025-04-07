import jwt from 'jsonwebtoken';

export const isAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const accessTokenPayload = jwt.decode(token);
    if(accessTokenPayload.admin) {
        next();
    } else {
        res.status(401).json({message:"Unauthorized"});
    }
}

