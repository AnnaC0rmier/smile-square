const router = require('express').Router();
const dashRoutes = require('./dashRoutes');
const userRoutes = require('./userRoutes');

router.use('/dashRoutes', dashRoutes);
router.use('/users', userRoutes);

module.exports = router;

