const User = require('../models/User')
const passport = require('passport')
const crypto = require('crypto')

async function login(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err)
        }

        if (!user) {
            return res.redirect('/auth/loginFailed')
        }

        req.logIn(user, (err) => {
            if (err) {
                return next(err)
            }

            res.status(200).json({ success: true, message: 'Login successfull' })
        })
    })(req, res, next)
}

async function logout(req, res, next) {
    console.log('logout requested')
    try {
        req.logout((err) => {
            if (err) { return next(err) }
        })
        
        req.session.destroy((err) => {
            if (err) console.log('Error:', err)
            req.user = null
            res.redirect('/auth/postLogout')
        })
    } catch (err) {
        console.log(err)
    }
}

async function register(req, res) {
    console.log('register requested')
    try {
      const username = req.body.username
      const password = req.body.password
      let user = await User.findOne({username: username})
      if (user) {
        res.json({ success: false, message: 'username already exists' })
      } else {
        const salt = crypto.randomBytes(16).toString('hex')
        let hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
        user = await User.create({username: username, hash: hash, salt: salt})
        res.json({success: true, message: 'registration successful'})
      }
    } catch (err) {
      console.log(err)
    }
}

async function user(req, res) {
    res.send(req.user)
}

async function loginFail(req, res) {
    try {
        res.status(401).send({ message: 'Incorrect username or password.' })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { login, logout, register, user, loginFail }