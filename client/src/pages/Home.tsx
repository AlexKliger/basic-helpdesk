import { Link } from 'react-router-dom'
import HelpForm from '../components/HelpForm'

const Home = () => {
    return (
        <>  
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl">Help Desk</h1>
                <Link to="/dashboard">
                    <i className="py-1 px-2 rounded bg-blue-800 text-right text-white font-bold">
                        ADMIN DASHBOARD
                    </i>
                </Link>
            </div>
            <HelpForm />
        </>
    )
}

export default Home