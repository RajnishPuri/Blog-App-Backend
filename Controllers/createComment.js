const BlogsModel = require('../Models/blogModel');

exports.createComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;
        const response = await BlogsModel.findByIdAndUpdate(
            id,
            { $push: { comment: comment } },
            { new: true }
        );
        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully Received Posts.",
        });
    }
    catch (e) {
        res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};
