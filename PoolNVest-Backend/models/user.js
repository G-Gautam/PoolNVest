const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}));

function validateUser(user) {
    const schema = {
        username : Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user,schema);
}

exports.User=User;
exports.validate= validateUser;