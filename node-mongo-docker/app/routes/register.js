const User = require('../models/user');
var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    
    try {
        return res.render('user/register');

    } catch (err) {
        res.status(400).send({ error: 'Search failed', message: err.message });
    }
});

router.get('/list', async (req, res) => {
    
    try {
        let users = await User.find();
        return res.render('user/list', { users });

    } catch (err) {
        res.status(400).send({ error: 'Search failed', message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    
    try {
        let users = await User.findById(req.params.id);
        console.log(JSON.stringify(users));

    } catch (err) {
        res.status(400).send({ error: 'Search failed', message: err.message });
    }
});

router.post('/save', async (req, res, next) => {
    
    try {
        await User.create(req.body);
        
        return res.status(200).redirect('/register/list');
        
    } catch (err) {
        res.status(400).send({ error: 'Registration failed', message: err.message });
    }
});

module.exports = router;