import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import LoginForm from '../components/LoginForm'
import TicketView from '../components/TicketView/_index'

const Dashboard = () => {
    const { user } = useContext(GlobalContext)

    return (
        <>
        <div className="mb-4">
            <h1 className="text-3xl">Admin Dashboard</h1>
            <h2 className="text-xl">{user ? 'Support tickets' :  'Login'}</h2>
        </div>
        {user ? (
            <TicketView />
        ) : (
            <LoginForm />
        )}
        </>
    )
}

export default Dashboard