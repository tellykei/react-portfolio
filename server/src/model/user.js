
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    email: String,

    passwordDigest: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;