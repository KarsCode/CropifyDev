import express from "express"
import dotenv from 'dotenv';
import cors from "cors";
import plantRoute from './routes/plantRoute.js'
import soilRoute from './routes/soilRoute.js'



dotenv.config();
const PORT = process.env.PORT;
const app=express();
app.use(express.json({ limit: '10mb' }));
app.use(cors());

app.use('/plantDisease',plantRoute);
app.use('/soilType',soilRoute);






app.listen(PORT,()=>{
    console.log(`Currently Listening On Port ${PORT}`)
})
