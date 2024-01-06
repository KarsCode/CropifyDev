import express from "express";
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();
const router = express.Router();
const ML_API = process.env.ML_API;

router.post('/upload', async (req, res) => {
    try {
      const { image } = req.body;
      const fastAPIEndpoint = ML_API+'/pestDetect'; 
      const response = await fetch(fastAPIEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image : image }),
      });
  
      if (response.ok) {
        const prediction = await response.json();
        res.json({ value: prediction }); 
      } else {
        console.error('Failed to process image');
        res.status(500).json({ error: 'Failed to process image' });
      }
    } catch (error) {
      console.error('Error processing image:', error);
    }
});




export default router;