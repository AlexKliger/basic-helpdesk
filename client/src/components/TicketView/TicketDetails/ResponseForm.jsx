import { useState } from 'react'

const ResponseForm = () => {
    const [text, setText] = useState('')
    const [flashMessage, setFlashMessage] = useState('')

    function onChange(e) {
        setText(e.target.value)
    }

    async function onSubmit(e) {
        e.preventDefault()
        try {
            const res = await fetch('/api/reply', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: text })
            })

            const data = await res.json()

            setText('')
            setFlashMessage(data.message)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className="flex flex-col" onSubmit={ onSubmit }>
            <textarea
                onChange={ onChange }
                name="description"
                value={ text }
                autoComplete="description"
                required
                className="border-2 border-slate-400 min-h-4"
            />

            <p>{flashMessage}</p>

            <button className="border-2 border-black rounded px-4 py-2" type="submit">
                Reply
            </button>
        </form>
    )
}

export default ResponseForm