const mongoose = require('../database/database');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: false
    },
    profileImageUrl: {
        type: String,
        require: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;