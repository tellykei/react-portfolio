const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// The schema here will define the fields and types of fields that will get stored in MongoDB
// Here we are saying our 'User' will have two string fields, 'name' and 'emailAddress'
const userSchema = new Mongoose.Schema({
    email:{
        type: String,
        unique: true,
        reuired: true,
    },
    name:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    sate: {
      type: Date,
      default: Date.now
    }
});
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.password);
};
UserSchema.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, same) {
      if (err) {
        callback(err);
      } else {
        callback(err, same);
      }
    });
  }
const User = Mongoose.model('User', userSchema);
module.exports = User;