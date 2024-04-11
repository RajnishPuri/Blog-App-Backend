const express = require('express');
const Router = express.Router();

const { createPost } = require('../Controllers/createPost');
const { getPost, getPostById } = require('../Controllers/getPost');
const { liked, unliked } = require('../Controllers/likesPost');
const { createComment } = require('../Controllers/createComment');
const { getComment } = require('../Controllers/getComment');

Router.post('/createPost', createPost);
Router.get('/getPost', getPost);
Router.get('/getPost/:id', getPostById);
Router.get('/likes/liked', liked);
Router.get('./likes/unliked', unliked);
Router.post('/:id/createComment', createComment);
Router.get('/:id/getComment', getComment);

module.exports = Router;