const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const dashRoutes = require('./dashRoutes');
const logInRoutes = require('./logInRoutes');

router.use('/home', homeRoutes);
router.use('/dash', dashRoutes);
router.use('/log-in', logInRoutes);

module.exports = router;

