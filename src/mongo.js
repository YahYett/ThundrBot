const mongoose = require('mongoose');
const { password } = require('./config.json');
const colors = require('colors');

module.exports = async () => {
    await mongoose.connect(password, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    console.log(colors.green('Connected to mongodb!'));
    return mongoose
}