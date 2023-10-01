const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()

router.post('/login', authController.login)

router.delete('/logout', authController.logout)

router.post('/register', authController.register)

router.get('/user', authController.user)

router.get('/loginFailed', authController.loginFail)

router.get('/postLogout', (req, res) => {
    console.log('postLogout requested')
    res.json({ message: 'Logout successfull' })
})

module.exports = router