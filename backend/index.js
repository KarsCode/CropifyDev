import express from "express"
import dotenv from 'dotenv';
import cors from "cors";
import plantRoute from './routes/plantRoute.js'
import soilRoute from './routes/soilRoute.js'
import UserModel from "./models/User.js";
import bcrypt from   'bcrypt';
import mongoose from 'mongoose';



dotenv.config();
const PORT = process.env.PORT;
const app=express();
app.use(express.json({ limit: '10mb' }));
app.use(cors());
const bcryptSalt = bcrypt.genSaltSync(10);
mongoose.connect(process.env.DATABASE_URL+"/Cropify");

app.use('/plantDisease',plantRoute);
app.use('/soilType',soilRoute);


app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
      const userDoc = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });
      res.json(userDoc);
    } catch (e) {
      res.status(422).json(e);
    }
  });

  



app.listen(PORT,()=>{
    console.log(`Currently Listening On Port ${PORT}`)
})
