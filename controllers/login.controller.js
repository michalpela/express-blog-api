import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {validationResult} from 'express-validator';
import User from '../models/user.js';

export const login = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).send({errors: errors.array()});

    try {
        const { email, password } = req.body;

        const userData = await User.findOne({email}).exec()
        if (!userData) return res.status(404).json({message: "User not exists"});

        bcrypt.compare(password, userData.password, async (err, result) =>{
            if(err){
                return res.status(400).json({message: "Server Error"});
            } else if (result){
                const accessToken = jwt.sign(
                    { email: email.toLowerCase()},
                    process.env.JWT_SECRET,
                    { expiresIn: '1d' }
                )
                return res.status(200).json({accessToken});
            } else {
                return res.status(401).json({message: "Invalid Credentials"});
            }
        } )


    } catch(error) {
        console.log(error);
        return res.status(400).json({message: "Server Error"});
    }
}