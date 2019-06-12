var express = require('express');
var router = express.Router();
const User = require('../models/user');


router.post('/test', function(req, res, next) {
    console.log("Name ---> " + req.body.user.name);
    res.sendStatus(200)
  });

router.post('/register',  async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({user});

    } catch (err) {
        res.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = router;