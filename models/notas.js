const mongoose = require('mongoose');
//const Tag = mongoose.model('Tag');
const notaModel = new mongoose.Schema(
    {
        text: {
            type: String
        },
        tag: {
            type: mongoose.Schema.ObjectId,
            ref: "Tag"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Nota", notaModel);