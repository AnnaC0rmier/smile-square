const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
  try {
    const existingUser = await User.findOne({ where: { userName: req.body.userName } });

   
    if (existingUser) {
      return res.status(400).json({ message: 'User Name Taken' });
    }

    
    const newUser = await User.create({
      userName: req.body.userName,
      password: req.body.password,
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { userName: req.body.userName } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

  
    const validPassword = await bcrypt.compare(req.body.password, userData.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});




module.exports = router;
