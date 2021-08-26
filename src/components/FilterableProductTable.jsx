
import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {

const products = props.products;

const [ query, setQuery ] = useState("");
const [searchResults, setSearchResults] = useState([]);


const handleChange = (newQuery) => setQuery(newQuery)
console.log("query", query)


useEffect(() => {
const filtered = products.filter(item => item.name.toLowerCase().includes(query))
setSearchResults(filtered);
},[query])

console.log("RESULTS", searchResults)
  return(
    <>
    <h1>IronStore</h1>
      <SearchBar  filter={handleChange} />
      <ProductTable  filtered={searchResults}/>
   </>
  )
}

export default FilterableProductTable;


