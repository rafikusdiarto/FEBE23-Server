const express = require('express')
const router = express.Router()

router.use('/users', require('./user/user.routes'))
router.use('/boards', require('./boards/board.routes'))
router.use('/partners', require('./partner/partners.routes'))
router.use('/blog', require('./blog/blog.routes'))

router.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      success: false,
      message: "You must be logged in",
      ...err,
    })
  }

  if (err.name === 'ValidationError') {
    return res.status(422).json(err)
  }

  if (err.name === "BadRequest") {
    return res.status(400).json(err)
  }
  next(err)
})

module.exports = router
