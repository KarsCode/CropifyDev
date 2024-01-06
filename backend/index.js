import express from "express"
import dotenv from 'dotenv';
import cors from "cors";
import plantRoute from './routes/plantRoute.js'
import soilRoute from './routes/soilRoute.js'
import blogRoute from './routes/blogRoute.js'
import UserModel from "./models/User.js";
import bcrypt from   'bcrypt';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import CookieParser from "cookie-parser";
import nodemailer from 'nodemailer';



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
app.use('/Blogs',blogRoute);


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

  app.post('/logout', (req,res) => {
    res.cookie('token', '', { path: '/', secure: true, sameSite: 'None' }).json(true);
  });



  app.post('/email', async (req, res) => {
    try {
      const { email, text } = req.body;
  
      // Nodemailer transporter configuration (update with your email service details)
      const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: 'RAM_page123@outlook.com',
          pass: 'RAMpage@123',
        },
      });
  
      // Email message options
      const mailOptions = {
        from: "RAM_page123@outlook.com",
        to: 'RAM_page123@outlook.com', // Use the recipient email from the request
        subject: `Mail From ${email}`,
        text: text, // Use the text from the request
      };
  
      // Send the email
      const info = await transporter.sendMail(mailOptions);
  
      console.log('Email sent:', info.response);
      res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });


app.listen(PORT,()=>{
    console.log(`Currently Listening On Port ${PORT}`)
})
