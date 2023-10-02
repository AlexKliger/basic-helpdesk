import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const LoginForm = () => {
    const [fields, setFields] = useState({username: '', password: ''})
    const [flashMessage, setFlashMessage] = useState('')

    const { login } = useContext(GlobalContext)

    function onChange(e) {
        const newFields = {...fields}
        newFields[e.target.name] = e.target.value
        setFields(newFields)
    }

    async function onSubmit(e) {
        e.preventDefault()
        try {
            const data = await login(fields)
            setFlashMessage(data.message)
            setFields({username: '', password: ''})
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className="flex flex-col items-center gap-4" onSubmit={ onSubmit }>
            <div>
                <label htmlFor="username">Username: </label>
                <input
                    onChange={ onChange }
                    name="username"
                    type="text"
                    value={ fields.username }
                    autoComplete="username"
                    required
                    className="border-2 border-slate-400"
                />
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input
                    onChange={ onChange }
                    name="password"
                    type="password"
                    value={ fields.password }
                    autoComplete="password"
                    required
                    className="border-2 border-slate-400"
                />
            </div>

            <span>{flashMessage}</span>

            <button className="border-2 border-black rounded px-4 py-2" type="submit">Login</button>
        </form>
    )
}

export default LoginForm