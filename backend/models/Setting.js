const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const settingSchema = new Schema({
   shippingFee : {
    type: Number,
    default : 200,
    required: true
   },
   freeShipping : {
    type: Number,
    default : 5000,
    required: true
   }
}, { timestamps: true });

module.exports = mongoose.model('Setting', settingSchema);