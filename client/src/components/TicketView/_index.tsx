import { useState } from 'react'
import TicketDetails from './TicketDetails/_index'
import TicketList from './TicketList/_index'

const TicketView = () => {
    const [selectedIndex, setSelectedIndex] = useState()

    if (selectedIndex) {
        return <TicketDetails selectedIndex={ selectedIndex } setSelectedIndex={ setSelectedIndex } />
    } else {
        return <TicketList setSelectedIndex={ setSelectedIndex } />
    }
}

export default TicketView