import React from 'react';

import './Dashboard.module.css'

const Product = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.image}</td>
      <td>{props.price}</td>
      <td>{props.rating}</td>
    </tr>
  );
};

export default Product;
