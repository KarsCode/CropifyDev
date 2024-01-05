import express from "express"
import dotenv from 'dotenv';
import cors from "cors";
import plantRoute from './routes/plantRoute.js'
import soilRoute from './routes/soilRoute.js'
import UserModel from "./models/User.js";
import bcrypt from   'bcrypt';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import CookieParser from "cookie-parser";



dotenv.config();
const PORT = process.env.PORT;
const app=express();
app.use(express.json({ limit: '10mb' }));
app.use(
  cors({
    origin: 'http://localhost:5173', // Specify the exact origin of your frontend
    credentials: true,
  })
);
app.use(CookieParser());

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;



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


  app.post('/login', async (req,res) => {
    const {email,password} = req.body;
    const userDoc = await UserModel.findOne({email});
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        jwt.sign({
          email:userDoc.email,
          id:userDoc._id
        }, jwtSecret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token',token).json(userDoc);
        });
      } else {
        res.status(422).json('pass not ok');
      }
    } else {
      res.json('not found');
    }
  });


  app.get('/profile', async (req,res) => {
    const {token} = req.cookies;
    if(token){
      jwt.verify(token,jwtSecret,{},(err,user)=>{
        if(err) throw err;
        res.json(user);
      });
    }else{
      res.json(null)
    }
  });

  app.post('/logout',async (req,res) => {
    res.cookie('token','').json(true);
  });


  app.post('/blogs',async (req,res) => {
    const uri = process.env.DATABASE_URL;
    const handleFetch = async () => {
      const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('Cropify');
        const collection = database.collection('Blogs');
        const foundBlogs = await collection.find().limit(6);
        res.json(foundBlogs);
    }
    handleFetch();
    res.json()
  });

app.listen(PORT,()=>{
    console.log(`Currently Listening On Port ${PORT}`)
})
