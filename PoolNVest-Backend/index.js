const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');

mongoose.connect('mongodb://localhost/users')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

const userSchema = new mongoose.Schema({
    username: String, 
    password: String, 
    interests: [ String ],
    age: Number
});

const User = mongoose.model('User', userSchema);
async function createUser(){
    const user = new User({
        username : 'Node.js Course',
        password : 'Mosh',
        interests : ['hello'],
        age : 19
    });
    
    const result = await user.save();
    console.log(result);
}

async function getUsers(){
    const user = await User.find({} : 'Mosh'});
    console.log(user);
};

modules.export = User;
