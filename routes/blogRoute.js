const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogControllers')

router.post('/blog/add-blog', blogController.addBlog)
router.get('/blog', blogController.getBlog)
router.delete('/blog/:id', blogController.deleteBlog)

module.exports = router;