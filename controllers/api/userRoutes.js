const router = require('express').Router();
const { User } = require('../../models/User');

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { userName: req.body.userName } });

    if (!userData) {
      return res.status(400).json({ message: 'Could not create new user' });
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Password does not meet standards' });
    }

    res.status(200).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
