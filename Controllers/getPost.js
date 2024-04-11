const BlogsModel = require('../Models/blogModel');

exports.getPost = async (req, res) => {
    try {
        const response = await BlogsModel.find({});
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

exports.getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await BlogsModel.findById({ _id: id });
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