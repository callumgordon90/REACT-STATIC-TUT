import React, { Component } from 'react';
import './App.css';

//Lowest component
function productCategoryRow({category}){
  return(
    <tr>
      <th colSpan={"2"}>
        {category}
      </th>
    </tr>
  );
}

//Second lowest component
function productRow({product}){
  const name = product.stocked ? product.name :
    <span style = {{ color: 'red'}}>
      {product.name}
    </span>;

    return(
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]



export default FilterableProductTable;
