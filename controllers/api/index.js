const router = require('express').Router();

const dashRoutes = require('./dashRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/dash', dashRoutes);
router.use('/users', userRoutes);
router.use('/comment', commentRoutes)

module.exports = router;


