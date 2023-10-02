const express = require('express')
const apiController = require('../controllers/api')
const { ensureAuth } = require('../middleware/auth')

const router = express.Router()

router.get('/', ensureAuth, apiController.getTickets)
router.post('/', apiController.createTicket)
router.put('/', ensureAuth, apiController.updateStatus)
router.put('/reply', ensureAuth, apiController.reply)

module.exports = router