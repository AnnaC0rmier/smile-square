const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/newcomment', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
        });
        res.status(200).json(newComment);
    } catch (error) {
        console.error('error');
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
