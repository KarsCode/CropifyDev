import express from "express"
import dotenv from 'dotenv';
import cors from "cors";



dotenv.config();
const PORT = process.env.PORT;
const app=express();
app.use(cors());

app.use(express.json());

app.post('/upload', async (req, res) => {
    try {
      const { base64Data } = req.body;
      // Send the base64Data to the FastAPI endpoint
      const fastAPIEndpoint = 'http://localhost:8000/plantDisease'; // Update with your actual FastAPI endpoint
      const response = await fetch(fastAPIEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image : base64Data }),
      });
  
      if (response.ok) {
        const prediction = await response.json();
        console.log('Plant disease prediction:', prediction);
        res.status(200).json({ message: 'Image processed successfully' });
      } else {
        console.error('Failed to process image');
        res.status(500).json({ error: 'Failed to process image' });
      }
    } catch (error) {
      console.error('Error processing image:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});




app.listen(PORT,()=>{
    console.log(`Currently Listening On Port ${PORT}`)
})
