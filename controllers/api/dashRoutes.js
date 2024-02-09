const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post('/blogpost', async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({
            ...req.body,
        });
        res.status(200).json(newBlogPost);
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(400).json({ message: 'Something went wrong on the server', error: error.message });
    }
});

module.exports = router;
