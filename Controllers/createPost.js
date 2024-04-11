const BlogsModel = require('../Models/blogModel');

exports.createPost = async (req, res) => {
    try {
        const { title, description, Auther, islike } = req.body;
        const response = await BlogsModel.create({ title, description, Auther, islike });
        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully Submitted.",
        })
    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: e.message,
        })
    }
}