const router = require('express').Router();
const dashRoutes = require('./dashRoutes');
const logInRoutes = require('./logInRoutes');

router.use('/dashRoutes', dashRoutes);
router.use('/login', logInRoutes);

module.exports = router;

