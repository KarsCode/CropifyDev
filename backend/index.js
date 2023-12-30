import express from "express"
import dotenv from 'dotenv';
import cors from "cors";
import plantRoute from './routes/plantRoute.js'



dotenv.config();
const PORT = process.env.PORT;
const app=express();
app.use(express.json());
app.use(cors());

app.use('/plantDisease',plantRoute);






app.listen(PORT,()=>{
    console.log(`Currently Listening On Port ${PORT}`)
})
