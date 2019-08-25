const Joi = require('joi');
const _ = require('lodash');
const {User} = require('../models/user.js');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req,res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ username : req.body.username });
    if (!user) return res.status(400).send('Invalid email or password');

    // const validPassword = bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password');

    res.send(true);
});

function validate(req) {
    const schema = {
        username : Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(req,schema);
}

module.exports = router;