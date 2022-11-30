const User = require('../models/userModels')
const isBodyMissingProps = require('../utils/validation')
const { userPassport } = require('../config/passport')

const register = async (req, res, next) => {
  try {
    const {
      email,
      username,
      password,
      role,
    } = req.body

    const requiredProps = [
      ['email', 'Your email is required'],
      ['username', 'Your username is required.'],
      ['password', 'A password is required'],
      ['role', 'Your role is required']
    ]

    const { hasMissingProps, propErrors } = isBodyMissingProps(
      requiredProps,
      req.body
    )

    if (hasMissingProps) {
      return next({
        name: "ValidationError",
        errors: propErrors
      })
    }

    const isExist = await User.count({ email })
    if (isExist) {
      return next({
        name: "ValidationError",
        errors: {
          email: {
            message: "Email already exist"
          }
        }
      })
    }

    const user = new User({
      email,
      username,
      role,
    })

    user.setPassword(password)

    await user.save()

    return res.status(201).json({
      message: 'User created successfully',
      user: user.authSerialize(),
    })

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

const login = async (req, res, next) => {
  try {
    const requiredProps = [
      ['email', 'Your email is required to sign in'],
      ['password', 'A password is required to sign in'],
    ]

    const { hasMissingProps, propErrors } = isBodyMissingProps(
      requiredProps,
      req.body
    )

    if (hasMissingProps) {
      return next({
        name: "ValidationError",
        errors: propErrors
      })
    }

    userPassport.authenticate("local", function (err, user, data) {
      if (err) {
        return next(err)
      }
      if (!user) {
        return next({ ...data, success: false })
      }

      return res.json({ success: true, user: user.authSerialize() })
    })(req, res, next)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  register,
  login,
}
