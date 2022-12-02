const Passport = require("passport").Passport
const LocalStrategy = require("passport-local").Strategy
const User = require("../models/userModels")

const userPassport = new Passport()
userPassport.use(
  new LocalStrategy(
    
    {
      usernameField: "username",
    },
    function(username, password, done) {
      User.findOne({ username })
        .then(function(user) {
          if (!user || !user.validPassword(password)) {
            return done(null, false, {
              name: 'UnauthorizedError',
              message: 'The email or password is incorrect.'
            })
          }
          return done(null, user)
        })
        .catch(done)
    }
  )
)

module.exports = {
  userPassport,
}
