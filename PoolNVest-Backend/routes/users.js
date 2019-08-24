const {User, validate} = require('../models/user.js');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req,res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ username : req.body.username });
    if (user) return res.status(400).send('User already registered.');

    user = new User({
        username : req.body.username,
        password : req.body.password,
    });

    await user.save();
    res.send(user);
});

module.exports = router;