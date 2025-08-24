const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min:0
    },
    discountPrice: {
        type: Number,
        default: 0
    },
    image: {
        url : {type : String , required:true},
        fileId : {type : String , required:true}
    },
    backgroundColor : {
        type: String,
        required: true
    },
    panelColor : {
        type: String,
        required: true
    },
    textColor : {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('Product', productSchema);