const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true
    },
    items: [{
        productId: {
            type: mongoose.Types.ObjectId,
            ref:"Product",
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        price : {
            type: Number,
            required: true,
            min: 0
        },
        discountPrice: {
            type: Number,
            min: 0
        }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);