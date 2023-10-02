const ticketStatusColors = {
    'new': 'red',
    'in progress': 'green',
    'resolved': 'blue'
}

const TicketListItem = ({ ticket, setSelectedIndex }) => {
    return (
        <li className="flex justify-between pr-4 py-3 border-b border-slate-400">
            <button className="basis-4/5" onClick={ setSelectedIndex }>
                <span>
                    <i className="font-bold">{ ticket.name }:</i> {ticket.description.slice(0, 40)}...
                </span>
            </button>

            <div className={`text-${ticketStatusColors[ticket.status]}-600 basis-1/5`}>
                <p>{ ticket.status }</p>
            </div>
        </li>
    )
}

export default TicketListItem