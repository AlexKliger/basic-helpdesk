import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <main className="max-w-lg mx-auto bg-slate-200 p-4">
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
        >
        </Route>

        <Route
          path="/dashboard"
          element={ <Dashboard /> }
        >
        </Route>
      </Routes>
    </main>
  )
}

export default App
