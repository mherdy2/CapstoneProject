import { useState, useEffect } from 'react';
import BASE_URL from '../../API';
import './cart.css'

function Cart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    // Fetch cart data from the Fake Store API
    fetch(`${BASE_URL}/carts`)
      .then(response => response.json())
      .then(data => {
        setCarts(data);
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  }, []);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart Items</h1>
      <ul className="cart-list">
        {carts.map((cart) => (
          <li key={cart.id} className="cart-item">
            <p>User ID: {cart.userId}</p>
            <p>Date: {cart.date}</p>
            <ul className="product-list">
              {cart.products.map((product) => (
                <li key={product.productId} className="product-item">
                  <p>Product ID: {product.productId}</p>
                  <p>Quantity: {product.quantity}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
