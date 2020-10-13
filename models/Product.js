const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    category: {
        type: String,
        required: true,
        max: 8 
    },
    type: {
        type: String,
        required: true,
        max: 8
    },
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
        max: 20
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: Array,
        required: true,
    },
    picture: {
        type: Array,
        required: true,
      } 

})

module.exports = mongoose.model('Product', productSchema)
