const express = require('express');

const router = express.Router();

const shopData = require('./shop');

router.get('/users', (req, res, next)=>{
    const user =shopData.users
    res.render('display-user', {users: user, pageTitle: 'users'});
    console.log('from user.js', user)
});


module.exports = router;