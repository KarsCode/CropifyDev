import express from "express";

const router = express.Router();

router.post('/upload', async (req, res) => {
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