const BlogsModel = require('../Models/blogModel');

exports.liked = async (req, res) => {
    try {
        const response = await BlogsModel.find({ islike: true });
        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully Received Posts.",
        })
    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: e.message,
        })
    }
}

exports.unliked = async (req, res) => {
    try {
        const response = await BlogsModel.find({ islike: false });
        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully Received Posts.",
        })
    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: e.message,
        })
    }
}
