import React from 'react';
import { useState } from 'react';

const SearchBar = (props) => {

  const onChangeHandler = event => {
    props.filter(event.target.value)
  };

  return(
    <div className="searchbar_container">
        <input className="searchbar" type="text" label="text" name="value" placeholder="Search your products"  onChange={onChangeHandler}/>
      <div className="checkbox_container">
        <input type="checkbox" label="checkbox"  /> 
        <p>Only show products on stock</p>           
       </div>
    </div>
  )
}

export default SearchBar;
