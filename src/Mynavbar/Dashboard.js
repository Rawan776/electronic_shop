//Dasboard
import React ,{useCallback ,useState ,useEffect} from 'react';
import Navbar_main from './Navbar_main';
import FooterSection from '../FooterSection/footerSection';
import ProductList from './ProductList';

const Dashboard = () => {
  const [products ,setProducts] = useState([]);
  const [error ,setError] = useState(null);

  const fetchProductsHandler = useCallback( async ()=>{
    setError(null);
    try{
      const response = await fetch ('https://65b7fe4a46324d531d55d562.mockapi.io/products');
      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      // const transformedData = data.map((productsData)=>{
      //   return {
      //     title : productsData.title,
      //     image :productsData.image,
      //     price: productsData.price,
      //     rating: productsData.rating,
      //     id : productsData.id
      //   };
      // });
      setProducts(data);

    }
    catch(error){
      setError(error.message);
    }
  },[]);

  useEffect(()=>{
    fetchProductsHandler()
  },[fetchProductsHandler]);

 

  let content = <></>;

  if(products.length > 0)
  {
    content =  <ProductList products={products}/>
  }
  else{
    content = <p>Found no products</p>
  }
  if (error) {
    content = <p>{error}</p>;
  }
  
  return (
    <React.Fragment>
      <Navbar_main/>
      {content}
      <FooterSection />
    </React.Fragment>
  );
};

export default Dashboard;
