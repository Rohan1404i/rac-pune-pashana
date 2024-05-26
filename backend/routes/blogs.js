const express = require('express');
const router = express.Router();
require('dotenv').config();
const eventController = require('../controller/blogs');

router.get('/getBlogs', eventController.blog_get);
router.post('/getBlog', eventController.getBlog);
router.post('/addBlog',eventController.addBlog);
router.put('/updateBlog',eventController.updateBlog);
router.delete('/deleteBlog',eventController.deleteBlog);
router.post('/search',eventController.searchBlog);

module.exports = router;