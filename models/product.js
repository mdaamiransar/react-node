const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    categoryId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    status: {
        type: Boolean,
        required: false,
    }
})

module.exports = mongoose.model('Product', ProductSchema);