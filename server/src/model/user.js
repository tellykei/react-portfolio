
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        unique: true,
        required: true,
    },
    name:{
        type:String,
        unique:false,
        required:true
    },
    password:{
        type:String,
        unique:false,
        required:true
    }
   
});

const User = mongoose.model('user', userSchema);

module.exports = User;