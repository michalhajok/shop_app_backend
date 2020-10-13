const mongoose = require('mongoose')

const AuthSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    birthday: {
        type: Date
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Auth', AuthSchema)