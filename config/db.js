import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({path:'/config/.env'});
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            autoIndex: true,
        }).then(() => {
            console.log("Connected to DB");
        })
    } catch (error) {
        console.log(error);
    }
}
export default connectToDB;