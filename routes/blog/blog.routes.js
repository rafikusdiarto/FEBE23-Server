const express = require('express')
const router = express.Router()
const blogController = require('../../controllers/blogController')

router.post('/add-blog', blogController.addBlog)
router.get('/', blogController.getBlog)
router.patch('/edit-blog/:id', blogController.updateBlog)
router.delete('/:id', blogController.deleteBlog)

module.exports = router;