import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const userSchema = new Schema({
    email: String,
    password: String,
    admin: Boolean,
})

const User = model('User', userSchema);
export default User