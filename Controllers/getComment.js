const BlogsModel = require('../Models/blogModel');

exports.getComment = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await BlogsModel.findById(id);
        if (!response) {
            return res.status(404).json({
                success: false,
                message: "Post not found.",
            });
        }
        const comments = response.comment; // Extract comments from the response
        res.status(200).json({
            success: true,
            data: comments,
            message: "Successfully retrieved comments.",
        });
    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};


