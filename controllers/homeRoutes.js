const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll({
      include: [{ model: User, attributes: ['userName'] }],
    });
    const posts = blogPosts.map((post) => post.get({ plain: true }));
    console.log('Blog Posts:', posts);
    res.render('home', { posts }); 
  } catch (error) {
    console.error('ERROR fetching blog posts:', error);
    return res.status(500).send('Internal server error');
  }
});



router.get('/login', async(req, res)=>{
    res.render('layouts/logIn', {layout: 'logIn', hideNavbar: true}) 
})

// router.get('/signup', async(req, res)=>{
//     res.render('layouts/logIn', {layout: 'logIn', hideNavbar: true}) 
// })

router.get('/dash', async(req, res)=>{
    res.render('dash')
   
})



module.exports = router;
