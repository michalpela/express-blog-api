import mongoose, {model, Schema} from 'mongoose';
const {Schema, model} = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
})

const User = model('User', userSchema);
export default User