import { useState, useEffect, createContext } from 'react'

const initialState = {
    user: undefined,
    tickets: []
}

export const GlobalContext = createContext(initialState)

export default function GlobalProvider({ children }) {
    const [user, setUser] = useState(undefined)
    const [tickets, setTickets] = useState(initialState.tickets)

    async function postTicket(ticket) {
        const res = await fetch('/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ticket)
        })

        return await res.json()
    }

    async function updateTicketStatus(status, ticketId) {
        await fetch('/api', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: ticketId, status: status})
        })

        const res = await fetch('/api', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })

        const tickets = await res.json()
        setTickets(tickets)
    }

    async function login(fields) {
        const res = await fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fields)
        })

        setUser(await getUser())

        return await res.json()
    }

    async function getUser() {
        const res = await fetch('/auth/user', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })

        return await res.json()
    }

    useEffect(() => {
        async function componentDidMount() {
            setUser(await getUser())
        }

        componentDidMount()
    }, [])

    // Request tickets if a user is logged in.
    useEffect(() => {
        async function componentDidMount() {
            const res = await fetch('/api', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })

            setTickets(await res.json())
        }

        componentDidMount()
    }, [user])

    return (
        <GlobalContext.Provider value={{
            postTicket,
            updateTicketStatus,
            login,
            user,
            tickets
        }}>
            {children}
        </GlobalContext.Provider>
    )
}