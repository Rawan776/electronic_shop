import './AddProduct.module.css'
import Product from './Product';
import AddProduct from './AddProduct';
import { useState } from 'react';

function ProductList(props) {
    const [isFormVisible, setFormVisibility] = useState(false);

    async function AddProductHandler(product) {
        const response = await fetch('https://65b7fe4a46324d531d55d562.mockapi.io/products', {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setFormVisibility(false);
        const data = await response.json();
        console.log(data);
        
    }

    return (
        <div className ="container-fluid tableContent  p-5">
            <div className='btn border border-rounded mb-2' onClick={()=>setFormVisibility(true)}> Add product </div>
            {isFormVisible && <AddProduct onAddProduct={AddProductHandler} />}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            title ={product.title}
                            image={product.image}
                            price ={product.price}
                            rating={product.rating}
                           
                       />
                    ))}
                </tbody>
            </table>
        </div>

    );
}
export default ProductList;