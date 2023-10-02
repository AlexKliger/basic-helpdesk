import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const HelpForm = () => {
    const [fields, setFields] = useState({name: '', email: '', description: ''})
    const [flashMessage, setFlashMessage] = useState('')

    const { postTicket } = useContext(GlobalContext)

    function onChange(e) {
        const newFields = {...fields}
        newFields[e.target.name] = e.target.value
        setFields(newFields)
    }

    async function onSubmit(e) {
        e.preventDefault()
        try {
            const data = await postTicket(fields)
            setFlashMessage(data.message)
            setFields({name: '', email: '', description: ''})
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className="flex flex-col items-center gap-4" onSubmit={ onSubmit }>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    onChange={ onChange }
                    name="name"
                    type="text"
                    value={ fields.name }
                    autoComplete="name"
                    required
                    className="border-2 border-slate-400"
                />
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input
                    onChange={ onChange }
                    name="email"
                    type="text"
                    value={ fields.email }
                    autoComplete="email"
                    required
                    className="border-2 border-slate-400"
                />
            </div>

            <div>
                <p>Tell us about your problem</p>
                <textarea
                    onChange={ onChange }
                    name="description"
                    value={ fields.description }
                    autoComplete="description"
                    required
                    className="border-2 border-slate-400"
                />
                <p>{flashMessage}</p>
            </div>

            <button className="border-2 border-black rounded px-4 py-2" type="submit">Submit</button>
        </form>
    )
}

export default HelpForm