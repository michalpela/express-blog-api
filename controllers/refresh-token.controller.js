import jwt from 'jsonwebtoken';
import User from "../models/user.js";


export const refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) return res.status(401).json({message:"Unauthorized"});

    try {
        const refreshTokenPayload = await jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await User.findOne({'email' : refreshTokenPayload.email});

        if (!user) return res.status(401).json({message:"Unauthorized"});

        const newAccessToken = jwt.sign(
            {
                email: refreshTokenPayload.email.toLowerCase(),
            },
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )
        return res.status(200).json({accessToken: newAccessToken});

    } catch(error) {
        console.log(error);
        return res.status(400).json({message: "Server Error"});
    }
}