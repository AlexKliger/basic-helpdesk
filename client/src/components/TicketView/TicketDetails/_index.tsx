import { useContext, useMemo } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import ResponseForm from './ResponseForm'
import Select from '../../Select'

const ticketStatuses = ['new', 'in progress', 'resolved']

const TicketDetails = ({ selectedIndex, setSelectedIndex }) => {
    const { tickets, updateTicketStatus } = useContext(GlobalContext)

    const handleStatusSelection = (selection) => {
        updateTicketStatus(selection, tickets[selectedIndex]._id)
    }

    return (
        <div className="rounded-md">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={ () => setSelectedIndex(undefined) }
                    className="border-4 border-black rounded-md p-2"
                >
                    BACK
                </button>
                <p>{tickets[selectedIndex].name}</p>
                <p>{tickets[selectedIndex].email}</p>
                <div>
                    <span>Status: </span>
                    <Select
                        options={ticketStatuses}
                        defaultSelection={ticketStatuses.indexOf(tickets[selectedIndex].status)}
                        onSelect={handleStatusSelection}
                    />
                </div>
            </div>

            <div className="bg-white rounded-md mb-4">
                <p className="p-3">{tickets[selectedIndex].description}</p>
            </div>

            <ResponseForm />
        </div>
    )
}

export default TicketDetails