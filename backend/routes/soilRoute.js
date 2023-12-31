import express from "express";

const router = express.Router();

router.post('/upload', async (req, res) => {
    try {
      const { image } = req.body;
      // Send the image(base64) to the FastAPI endpoint
      const fastAPIEndpoint = 'http://localhost:8000/soilType'; // Update with your actual FastAPI endpoint
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



export default router;