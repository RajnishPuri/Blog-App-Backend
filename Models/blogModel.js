const mongoose = require('mongoose');

const BlogsModel = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    Auther: {
        type: String,
        required: true,
        maxLength: 20,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    islike: {
        type: Boolean,
        required: true,
        default: false,
    },
    comment: {
        type: Array,
        required: false,
        default: [],
    }

})

module.exports = mongoose.model("BlogsModel", BlogsModel);