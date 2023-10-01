const crypto = require('crypto');
const LocalStrategy = require('passport-local')
const User = require('../models/User')

module.exports = function (passport) {
    passport.use(new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
      },
      async function verify(username, password, done) {
          try {
            let user = await User.findOne({ username: username })
            if (!user) {
              return done(null, false)
            }
            // User found.
            let hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex')
            if (!(user.hash === hash)) {
              return done(null, false, {message: 'Incorrect username or password.'})
            }
            return done(null, user)
          } catch(err) {
            return done(err)
          }
      }
    ))

    passport.serializeUser(function(user, done) {
        user = {username: user.username, hash: user.hash, salt: user.salt, id: user._id}
        return done(null, user)
    })
    
    passport.deserializeUser(function(user, done) {
        return done(null, user)
    })
}