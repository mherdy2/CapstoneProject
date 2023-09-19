import { useState, useEffect } from 'react';
import './style.css';
import Navbar from './components/Navbar.jsx';
import  BASE_URL  from './API/index.js'; 

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the Fake Store API using the Fetch API
    fetch(`${BASE_URL}/products`) // Use template literals to include BASE_URL
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fake Store</h1>
        <div className="product-list">
          {products.map(product => (
            <div className="product" key={product.id}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
