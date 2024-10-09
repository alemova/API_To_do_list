const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
    {
        email: {
            type: String
        },
        password: {
            type: String
        },
        name: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userModel);