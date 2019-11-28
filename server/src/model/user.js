const Mongoose = require('mongoose');

// The schema here will define the fields and types of fields that will get stored in MongoDB
// Here we are saying our 'User' will have two string fields, 'name' and 'emailAddress'
const userSchema = new Mongoose.Schema({
    email:{
        type: String,
        unique: true,
        reuired: true,
        trim: true
    },
    name:{
        type:String,
        unique: false,
        required: true,
        trim: true
    },
    password:{
        type:String,
        unique:false,
        required:true,
        trim: false
    }
});


const User = Mongoose.model('User', userSchema);
module.exports = User;