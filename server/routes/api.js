const express = require('express')
const apiController = require('../controllers/api')

const router = express.Router()

router.get('/', apiController.getTickets)
router.post('/', apiController.createTicket)
router.put('/', apiController.updateStatus)

module.exports = router