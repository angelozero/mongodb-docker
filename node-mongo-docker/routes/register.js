var express = require('express');
var router = express.Router();
const User = require('../models/user');



router.get('/', function (req, res, next) {

    let user = new User({
        "name": "Naruto",
        "email": "naruto@kakashi.com",
        "password": "vila-da-folha",
        "imageUrl": "https://easydrawingguides-7512.kxcdn.com/wp-content/uploads/2017/05/how-to-draw-naruto-20.png"
    });

    res.render('register', { "user": user });
});


router.post('/test', function (req, res, next) {
    console.log("Name ---> " + req.body.user.name);
    res.sendStatus(200)
    res.render('register');
});

router.post('/save', async (req, res) => {
    
    console.log(req.body.name);
    return res.render('register');
    
    // try {
    //     const user = await User.create(req.body);
    //     return res.send({ user });

    // } catch (err) {
    //     res.status(400).send({ error: 'Registration failed' });
    // }
});

module.exports = router;