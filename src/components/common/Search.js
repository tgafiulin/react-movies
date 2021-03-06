import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateSearchValue } from '../../app/movieReducer'
import Input from './Input'

function Search () {
    const [searchValue, updateValue] = useState('')
    const dispatch = useDispatch()

    const onKeyPressHandler = (e) => {
        if (e.key === 'Enter') {
            handleCLick()
        }
    }

    const handleCLick = () => {
        dispatch(updateSearchValue(searchValue))
    }

    return (
        <div className="search">
            <Input
                onChange={(e) => updateValue(e.target.value)}
                onKeyPress={onKeyPressHandler}
                value={searchValue}
                placeholder="Поиск..."
            />
            <button className="search__btn" onClick={handleCLick}>Найти</button>
        </div>
    )
}

export default Search;