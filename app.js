import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path: `./config/.env`})
import connectToDB from "./config/db.js";
import cors from 'cors';

import postRoutes from './routes/post.js';
import auth from "./routes/auth.js";

await connectToDB()

const app = express();

const allowedOrigins = process.env.NODE_ENV === 'production'
    ? process.env.CORS_ORIGIN_PROD
    : process.env.CORS_ORIGIN_DEV;


app.use(cors({
  origin: allowedOrigins,
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static("public"))


app.use('/api/', postRoutes)
app.use('/api/', auth)

app.listen(process.env.PORT, () =>{
  console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});