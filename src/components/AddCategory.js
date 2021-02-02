import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //setInputValue(e.target.value);
        setInputValue(valor => e.target.value);
    }

    const handleSunmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue,...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSunmit }>
            <input type="text" className="form-control" value={inputValue} onChange={handleInputChange} />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

