const Mongoose= require("Mongoose");

const MessageSchema = new Mongoose.Schema({
    message:{
        type: String
    },
    name: {
        type : String
    }
});

const Message = Mongoose.model("Message", MessageSchema)
module.exports.Message;