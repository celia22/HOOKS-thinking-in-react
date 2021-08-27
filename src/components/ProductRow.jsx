import React from 'react';

const ProductRow = (props) => {

  const name = props.name;
  const price = props.price;
 
   return(      
    <>
       <p className="item_container">{name}</p>
       <p className="item_container">{price}</p>
    </>        

   )
}

export default ProductRow;