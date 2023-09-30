const mongoose = require('mongoose')

const TICKET_STATUS = {
    NEW: 'new',
    IN_PROGRESS: 'in-progress',
    RESOLVED: 'resolved'
}

const TicketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    status: {
        type: String,
        default: TICKET_STATUS.NEW
    }
})

module.exports = mongoose.model('Ticket', TicketSchema)