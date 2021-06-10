import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    // Se debe de poner el estado como un string vacio para evitar el undefined y que lance error al tratar de cambiar el componente
    const [inputValue, setInputValue] = useState("")
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            setInputValue('')
        }
        setCategories( cate => [inputValue, ...cate])
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                onChange={handleInputChange}
                type="text"
                value={inputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
