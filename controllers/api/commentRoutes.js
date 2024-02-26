const express = require('express');
const { Comment, BlogPost, User } = require('../../models'); 
const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const { content, authorName } = req.body;
  
      const newComment = await Comment.create({
        content,
        authorName
      });
  
      res.status(201).json(newComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
