const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    },
    age: {
        type: Number,
        required: false,
        minlength: 2,
        maxlength: 3
    },
    interests: {
        type: [ String ],
        required: false
    }
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_username: this._username}, config.get('jwtPrivateKey'));
    return token;
}
const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = {
        username : Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(255).required(),
        age: Joi.number(),
        interests: Joi.array()
    };
    return Joi.validate(user,schema);
}

exports.User=User;
exports.validate= validateUser;