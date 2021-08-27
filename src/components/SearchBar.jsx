import React, { useState } from 'react'

const SearchBar = (props) => {

  const [checkbox, setCheckbox ] = useState(false)

  const onChangeHandler = event => {
    props.filter(event.target.value)
  };


  const toggleChecked = (event) => {
    setCheckbox(value => !value);
    props.check(event.target.checked)
  }

  return(
    <div className="searchbar_container">
        <input className="searchbar" type="text" label="text" name="value" placeholder="Search your products"  onChange={onChangeHandler} />
      <div className="checkbox_container">
        <input type="checkbox" label="checkbox"  onClick={toggleChecked}/> 
        <p>Only show products on stock</p>           
       </div>
    </div>
  )
}

export default SearchBar;
