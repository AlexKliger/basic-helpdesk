import { useState } from 'react'

const Select = ({ options, defaultSelection, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(options[defaultSelection])

    const handleSelectChange = (e) => {
        const selection = e.target.value
        setSelectedOption(selection)
        onSelect(selection)
    }

    return (
        <select
            value={ selectedOption }
            onChange={ handleSelectChange }
        >
            {options.map((option, key) => 
                <option value={ option } key={ key }>{option}</option>
            )}
        </select>
    )
}

export default Select