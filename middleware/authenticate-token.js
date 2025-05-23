import jwt from 'jsonwebtoken';

export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token === null) return res.status(401).json({message:"Unauthorized"});

    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).json({message:"Invalid token"});

            req.user = user;
            next();
        })
    } catch (error) {
        res.status(401).end();
    }
}