import express from "express";

import { MongoClient } from 'mongodb';

const router = express.Router();

router.get('/',async (req,res) => {
    const uri = process.env.DATABASE_URL;
    const handleFetch = async () => {
      const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('Cropify');
        const collection = database.collection('Blogs');
        const foundBlogs = await collection.find().limit(6).toArray();
        res.json(foundBlogs);
    }
    handleFetch();
  });


router.get('/:blogId', (req, res) => {
  const blogId = req.params.blogId;
  const uri = process.env.DATABASE_URL;
  const handleFetch = async () => {
      const client = new MongoClient(uri);
        await client.connect();
        const database = client.db('Cropify');
        const collection = database.collection('Blogs');
        const numericBlogId = parseInt(blogId, 10);
        const foundDocument = await collection.findOne({ blog_id: numericBlogId });
        res.json(foundDocument);
    }
    handleFetch();
});

export default router;