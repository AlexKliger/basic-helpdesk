const Ticket = require('../models/Ticket')

async function getTickets(req, res) {
    try {
        const tickets = await Ticket.find()
        res.json(tickets)
    }  catch (err) {
        console.log(err)
    }
}

async function createTicket(req, res) {
    console.log('createTicket requested')
    try {
        const ticket = req.body
        if (!ticket || !ticket.name || !ticket.email) {
            res.status(400).json({ message: 'Please complete required fields.' })
        }

        await Ticket.create({
            name: ticket.name,
            email: ticket.email,
            description: ticket.description || ""
        })

        res.json({ message: 'Ticket submitted successfully' })
    } catch (err) {
        console.log(err)
    }
}

async function updateStatus(req, res) {
    console.log('updateStatus requested')
    try {
        if (!req.body.id) {
            res.status(400).json({ message: 'Please complete id field.' })
        }

        const ticket = await Ticket.findOneAndUpdate(
            { _id: req.body.id },
            {
                status: req.body.status
            }
        )
        
        res.json(ticket)
    } catch (err) {
        console.log(err)
    }
}

async function reply(req, res) {
    console.log(req.body.text)
    res.json({ message: 'Reply sent'})
}

module.exports = { getTickets, createTicket, updateStatus, reply }