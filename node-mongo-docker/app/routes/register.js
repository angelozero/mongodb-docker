var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/list', async (req, res) => {
    
    try {
        let users = await User.find();
        return res.render('user/list', { users });

    } catch (err) {
        res.status(400).send({ error: 'Search failed', message: err.message });
    }
});

router.get('/', async (req, res) => {
    
    try {
        return res.render('user/register');

    } catch (err) {
        res.status(400).send({ error: 'Search failed', message: err.message });
    }
});


router.post('/save', async (req, res) => {
    
    try {
        await User.create(req.body);
        let users = await User.find();
        return res.render('user/list', { users });

    } catch (err) {
        res.status(400).send({ error: 'Registration failed', message: err.message });
    }
});

module.exports = router;