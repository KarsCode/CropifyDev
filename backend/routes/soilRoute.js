import express from "express";
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();
const router = express.Router();
const ML_API = process.env.ML_API;

router.post('/upload', async (req, res) => {
    try {
      const { image } = req.body;
      // Send the image(base64) to the FastAPI endpoint
      const fastAPIEndpoint = ML_API+'/soilType'; // Update with your actual FastAPI endpoint
      const response = await fetch(fastAPIEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image : image }),
      });
  
      if (response.ok) {
        const prediction = await response.json();
        res.json({ id: prediction }); 
      } else {
        console.error('Failed to process image');
        res.status(500).json({ error: 'Failed to process image' });
      }
    } catch (error) {
      console.error('Error processing image:', error);
    }
});

router.get('/:soilId', (req, res) => {
  const soilId = req.params.soilId;
  const uri = process.env.DATABASE_URL;
  const handleFetch = async () => {
      const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('Cropify');
        const collection = database.collection('SoilType');
        const numericSoilId = parseInt(soilId, 10);
        const foundDocument = await collection.findOne({ soil_id: numericSoilId });
        res.json({ document: foundDocument });

    }
    handleFetch();
});

export default router;