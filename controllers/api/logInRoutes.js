const router = require('express').Router();

router.get('/login', async(req, res)=>{
    res.render('logIn')
   
})


module.exports = router