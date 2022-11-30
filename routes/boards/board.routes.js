const express = require('express')
const { isAdmin, isModerator } = require('../../middlewares/authMiddleware')
const router = express.Router()
const boardsController = require('../../controllers/boardsController')

router.get('/all', isAdmin, boardsController.allAccess)
router.get('/admin', isAdmin, boardsController.adminBoard)
router.get('/user', boardsController.userBoard)

module.exports = router
