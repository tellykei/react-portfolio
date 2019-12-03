const mongoose= require("mongoose");

const MessageSchema =  mongoose.Schema({
    messages:{
        type: String,
        unique:false,
        required: true
    },
    name: {
        type : String,
        unique:false,
        required: true
    }
});

const Messageuser = mongoose.model("message", MessageSchema)
module.exports=Messageuser;