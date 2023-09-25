import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BASE_URL from '../../API/index.js';
import { Link } from 'react-router-dom';


function SingleUser() {
  const { userId } = useParams(); // Get the userId from the route parameter
  const [user, setUser] = useState(null); // Initialize user state with null

  useEffect(() => {
    // Fetch the details of a single user using the userId parameter
    fetch(`${BASE_URL}/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data); // Set the user data
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, [userId]); // Include userId in the dependency array

  if (!user) {
    // Display a loading message or spinner while data is being fetched
    return <p>Loading user details...</p>;
  }

  return (
    <div>
      <h1>Customer Details</h1>
      <p>Name: {user.name.firstname} {user.name.lastname}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address.number} {user.address.street}, {user.address.city} </p>
      <p>Zip Code: {user.address.zipcode} </p>
      <Link to="/allUser">Back</Link>
      <Link to="/userCart">Cart</Link>
    </div>
  );
}

export default SingleUser;
