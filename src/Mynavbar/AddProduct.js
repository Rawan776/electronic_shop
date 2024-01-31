import React, { useRef , useState} from 'react';

import classes from './AddProduct.module.css';

function AddProduct(props) {
  const titleRef = useRef('');
  const imageRef = useRef('');
  const ratingRef = useRef('');
  const PriceRef = useRef('');
  const [selectedImage, setSelectedImage] = useState(null);

//   if (selectedImage) {
//     const formData = new FormData();
//     formData.append('image', selectedImage);
//   }
  //const formData = new FormData();

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



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      // Use FileReader to convert the selected image to a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>image</label>
        <input type="file" id="image" accept="image/*"  ref={imageRef} onChange={handleImageChange} />
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