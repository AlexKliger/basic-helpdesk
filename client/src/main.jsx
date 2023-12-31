import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalProvider from './context/GlobalState'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>,
)
