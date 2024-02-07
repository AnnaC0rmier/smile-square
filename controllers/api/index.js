const router = require('express').Router();
const dashRoutes = require('./dashRoutes');
const logInRoutes = require('./logInRoutes');

router.use('/dash', dashRoutes);
router.use('/log-in', logInRoutes);

module.exports = router;

