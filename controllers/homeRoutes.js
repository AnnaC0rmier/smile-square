const router = require('express').Router();

router.get('/', async(req,res)=>{
    res.render('layouts/main')
});


router.get('/login', async(req, res)=>{
    res.render('layouts/logIn', {layout: 'logIn', hideNavbar: true})
   
})

router.get('/dash', async(req, res)=>{
    res.render('dash')
   
})


module.exports = router;
