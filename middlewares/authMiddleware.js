const jwt = require("jsonwebtoken")

function getToken(req) {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1]
  }
  return null
}

const isAdmin = (req, res, next) => {
  try {
    const token = getToken(req)
    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized',
      })
    }
    const user = jwt.verify(token, process.env.APP_SECRET)
    if (!user) {
      return next({
        name: 'Unauthorized',
        message: 'Unauthorized',
      })
    }

    if (user.role !== "ADMIN") {
      return next({
        name: 'Unauthorized',
        message: 'Unauthorized, you are not an admin',
      })
    }

    req.user = user
    next()
  }
  catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data."
    })
  }
}

const isModerator = (req, res, next) => {
  try {
    const token = getToken(req)
    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized',
      })
    }
    const user = jwt.verify(token, process.env.APP_SECRET)
    if (!user) {
      return next({
        name: 'Unauthorized',
        message: 'Unauthorized',
      })
    }

    if (user.role !== "MODERATOR") {
      return next({
        name: 'Unauthorized',
        message: 'Unauthorized, you are not an moderator',
      })
    }

    req.user = user
    next()
  }
  catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data."
    })
  }
}

const isAuth = (req, res, next) => {
  try {
    const token = getToken(req)
    if (!token) {
      return res.status(401).json({
        message: 'Unauthorized',
      })
    }
    const user = jwt.verify(token, process.env.APP_SECRET)
    if (!user) {
      return next({
        name: 'Unauthorized',
        message: 'Unauthorized',
      })
    }

    req.user = user
    next()
  }
  catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving data."
    })
  }
}

module.exports = {
  isAdmin,
  isModerator,
  isAuth,
}
