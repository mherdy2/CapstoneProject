import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'; // Import useParams to access the product ID from the URL
import BASE_URL from '../../API/index.js';
import './products.css'

function SingleProduct() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      // Fetch a single product based on the product ID from the URL
      fetch(`${BASE_URL}/products/${productId}`)
        .then(response => response.json())
        .then(data => {
          setProduct(data);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });
    }, [productId]);
  
    if (!product) {
      return <p>Loading...</p>;
    }
  
    return (
      <div className="single-product">
        <img
          src={product.image} // Use the imageUrl property from your product data
          alt={product.title}
          className="product-image"
          style={{ width: '200px' }}
        />
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <Link to="/allProducts" >Back</Link>
      </div>
    );
  }
  
  export default SingleProduct;