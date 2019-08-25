const bcrypt = require('bcrypt-nodejs');
const _ = require('lodash');
const { User, validate } = require('../models/user.js');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).send('User already registered.');

    user = new User(_.pick(req.body, ['username', 'password']));
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.send(_.pick(user, ['username', 'password']));
});

router.get('/GetUser/:username', async (req, res) => {
    let user = await User.findOne({ username: req.params.username });
    if (user) {
        console.log(user);
        res.json({
            "user": user
        });
    }
    else {
        res.send("User not found");
    }
})

module.exports = router;