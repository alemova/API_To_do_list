const mongoose = require('mongoose');

const tagModel = new mongoose.Schema(
    {
        name: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Tag", tagModel);