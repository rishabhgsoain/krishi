const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.set('strictQuery', true);

const Addeqp = new Schema({
    name: {
        type: String,
        required: true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"farmer"
    },
    purpose: {
        type: String,
        required: true
    },

    details: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now,
    },
});
const Addingeqp = mongoose.model("equipments", Addeqp);
module.exports = Addingeqp;