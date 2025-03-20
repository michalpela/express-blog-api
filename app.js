import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path: `./config/.env`})
import connectToDB from "./config/db.js";
import cors from 'cors';

import postRoutes from './routes/post.js';

await connectToDB()

const app = express();

const allowedOrigins = process.env.NODE_ENV === 'production'
    ? process.env.CORS_ORIGIN_PROD.split(',')
    : process.env.CORS_ORIGIN_DEV.split(',');


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

console.log(process.env.NODE_ENV)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(express.static("public"))


app.use('/api/', postRoutes)

app.listen(process.env.PORT, () =>{
  console.log(`Server started on port ${process.env.PORT}`);
});