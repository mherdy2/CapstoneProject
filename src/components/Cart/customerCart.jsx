import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../API/index";
import "./cart.css";

export default function MyCart() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(calculateTotal(carts));

  const navigate = useNavigate();

  useEffect(() => {
    const storeCartData = localStorage.getItem("MyCart");
    if (storeCartData) {
      try {
        const parsedCartData = JSON.parse(storeCartData);
        setCarts(parsedCartData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error loading cart data");
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  async function deleteCartHandler(deleteCartId) {
    try {
      const response = await fetch(`${BASE_URL}/carts/${deleteCartId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedCart = carts.filter((cartItem) => cartItem.id !== deleteCartId);
        setCarts(updatedCart);
        localStorage.setItem("MyCart", JSON.stringify(updatedCart));
        console.log("Item Removed");
      } else {
        console.error("Unable to delete item in cart");
      }
    } catch (error) {
      console.error("Error deleting item", error);
    }
  }

  async function updateQuantity(cartItemId, newQuantity) {
    const updatedCart = carts.map((cartItem) =>
      cartItem.id === cartItemId ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCarts(updatedCart);
    localStorage.setItem("MyCart", JSON.stringify(updatedCart));
  }

  function increaseQuantity(cartItemId) {
    const updatedQuantity = carts.find((cartItem) => cartItem.id === cartItemId).quantity + 1;
    updateQuantity(cartItemId, updatedQuantity);
  }

  function decreaseQuantity(cartItemId) {
    const currentItem = carts.find((cartItem) => cartItem.id === cartItemId);
    if (currentItem.quantity > 1) {
      const updatedQuantity = currentItem.quantity - 1;
      updateQuantity(cartItemId, updatedQuantity);
    }
  }

  function calculateTotal(cartItems) {
    return cartItems.reduce((total, cartItem) => {
      const subTotal = cartItem.price * cartItem.quantity;
      return total + subTotal;
    }, 0);
  }

  useEffect(() => {
    const newPrice = calculateTotal(carts);
    setTotal(newPrice);
  }, [carts]);

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="userCart">
        {carts && carts.length > 0 ? (
          carts.map((cartItem) => (
            <div key={cartItem.id}>
              <div>
                <h3>{cartItem.title}</h3>
                <img src={cartItem.image} alt={cartItem.title} width="50px" height="50px" />
                <p>Price: ${cartItem.price}</p>
                <p>Quantity: {cartItem.quantity}</p>
                <button className="btnDecrease" onClick={() => decreaseQuantity(cartItem.id)}>
                  -
                </button>
                <button className="btnDelete" onClick={() => deleteCartHandler(cartItem.id)}>
                  Remove Item
                </button>
                <button className="btnIncrease" onClick={() => increaseQuantity(cartItem.id)}>
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <p className="total">Your Total: ${total}</p>
        <div>
          <button className="btnBack" onClick={() => navigate("/allProducts")}>
            Keep Shopping
          </button>
          <button className="btnCheck" onClick={() => navigate("/checkOut")}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
