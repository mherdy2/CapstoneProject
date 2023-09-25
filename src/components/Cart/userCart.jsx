import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../API/index';

function GroupOrdersByUser() {
  const [groupedOrders, setGroupedOrders] = useState([]);

  useEffect(() => {
    // Fetch user's cart data from the API
    fetch(`${BASE_URL}/carts/user/2`)
      .then((response) => response.json())
      .then((cartData) => {
        const orders = cartData.products || [];

        // Group orders by user
        const userOrders = {};
        orders.forEach((order) => {
          const userId = order.userId;

          if (!userOrders[userId]) {
            userOrders[userId] = {
              user: order.user,
              orders: [],
            };
          }

          userOrders[userId].orders.push(order);
        });

        const groupedOrdersArray = Object.values(userOrders);

        // Set the grouped orders in the component state
        setGroupedOrders(groupedOrdersArray);
      })
      .catch((error) => console.error('Error fetching user cart data:', error));
  }, []);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {groupedOrders.map((group) => (
        <div key={group.user.id}>
          <h2>{`${group.user.name.firstname} ${group.user.name.lastname}'s Orders:`}</h2>
          <ul>
            {group.orders.map((order) => (
              <li key={order.productId}>{`Product ID: ${order.productId}, Quantity: ${order.quantity}`}</li>
            ))}
          </ul>
        </div>
      ))}
      <Link to="/allUser">Member</Link>
      <Link to="/user/1">Back</Link>
    </div>
  );
}

export default GroupOrdersByUser;
