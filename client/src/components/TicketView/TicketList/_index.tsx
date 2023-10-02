import { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import TicketListItem from './TicketListItem'

const TicketList = ({ setSelectedIndex }) => {
    const { tickets } = useContext(GlobalContext)

    return (
        <ol>
            {tickets ? (

            tickets.map((ticket, key) => 
                <TicketListItem
                    ticket={ ticket }
                    setSelectedIndex={ () => setSelectedIndex(key) }
                    key={ key }
                />
            )

            ) : (
                <p>No tickets</p>
            )
            }
        </ol>
    )
}

export default TicketList