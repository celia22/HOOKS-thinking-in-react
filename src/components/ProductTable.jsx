import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {

  const products = props.filtered
  const inStock = props.stocked
  const checkbox = props.checkbox

console.log("CHECKBOX", checkbox)
console.log("PRODS", products)
console.log("SOTCK", inStock)


 
  return(
    <>
    <table className="table_container">  
    <tbody>
      <tr className="table_container_title">
       <td><h3>Name</h3></td> 
       <td><h3>Price</h3></td>
      </tr>

      {checkbox ? (
        <>        
        {inStock.map((item, index) => { 
          return(
            <tr className="table_items" key={index}>            
             <td> < ProductRow name={item.name} /> </td>
             <td>< ProductRow  price={item.price} /> </td> 
             </tr>
              )              
           })}
        </>   
      ) : (
        <>
        {products.map((item, index) => { 
          return(
            <tr className="table_items" key={index}>  
             <td> < ProductRow name={item.name} /> </td>
             <td>< ProductRow  price={item.price} /> </td> 
             </tr>
              )              
           })}
        </>   
      ) }          
         
     </tbody>                            
    </table>
    </>
  )
}

export default ProductTable;