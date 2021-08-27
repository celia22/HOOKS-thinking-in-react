
import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {

  // this.state = {
  //   products: this.props.products,
 
  //   inStock: [],
  //   checkbox: false,
    


const products = props.products;
const [inStock, setInStock] = useState([]);
const [ query, setQuery ] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [checkbox, setCheckbox ] = useState(false)


const searchProductQuery = (newQuery) => setQuery(newQuery)

const handleStock = (event) => {
  const inStockArray = []
  searchResults.map(item => {
    if(item.stocked){
      inStockArray.push(item)
    }
  })
    setInStock(inStockArray);
    setCheckbox(event);   
    
 }

 console.log("IN STOCK", inStock)
 console.log("SETTED", checkbox) 

useEffect(() => {
const filtered = products.filter(item => item.name.toLowerCase().includes(query))
setSearchResults(filtered);
},[query])

  return(
    <>
    <h1>IronStore</h1>
      <SearchBar  filter={searchProductQuery} check={handleStock}/>
      <ProductTable  filtered={searchResults} stocked={inStock} checkbox={checkbox}/>
   </>
  )
}

export default FilterableProductTable;


