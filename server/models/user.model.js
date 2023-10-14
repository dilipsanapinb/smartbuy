const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;