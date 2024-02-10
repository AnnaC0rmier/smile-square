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

router.post('/comment', async (req,res) => {
    try{
        const newComment = await Comment.create({
            ...req.body, 
        });
        res.status(200).json(newComment);
    }
    catch (error){
        console.error('error')
    }
})

module.exports = router;
