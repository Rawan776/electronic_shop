import React, { useRef } from 'react';

import classes from './AddProduct.module.css';

function AddProduct(props) {
  const titleRef = useRef('');
  const imageRef = useRef('');
  const ratingRef = useRef('');
  const PriceRef = useRef('');


  function submitHandler(event) {
    event.preventDefault();

     const product = {
      title: titleRef.current.value,
      image : imageRef.current.value,
      rating : ratingRef.current.value,
      price : PriceRef.current.value,
   
    };

    props.onAddProduct(product);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>image</label>
        <input type='image' id='rating' ref={ratingRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='rating'>Rate product [1-5] : </label>
        <input type='text' id='rating' ref={ratingRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='price'>Price : </label>
        <input type='text' id='price' ref={PriceRef} />
      </div>
      <div className='d-flex justify-content-end gap-3'>
      <button>Add</button>
      <button>cancel</button>
      </div>
      
    </form>
  );
}

export default AddProduct;