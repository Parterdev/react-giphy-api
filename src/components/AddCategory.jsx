import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Submited", e);
    if(inputValue.trim().length > 2) {
      //Insertion
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
    {/* <h1>{inputValue}</h1> */}
      <input 
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>  
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
