import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import User from '../models/user.js';

export const register = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({message:errors.array()});

    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({email}).exec();
        if (existingUser) {
            return res.status(409).json({message:"User already exists"});
        }

        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                console.error(err);
                return res.status(500).json({message:"Server Error"});
            }
            const newUser = new User({
                email,
                password: hash,
            })

            await newUser.save();

            return res.status(201).json({message:"User successfully registered"});
        })
    } catch(error) {
        console.error(error);
        return  res.status(500).json({message: "Server Error"});
    }
}