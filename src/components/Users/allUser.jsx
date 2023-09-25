import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../API/index.js'
import './customer.css'

function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the Fake Store API using the Fetch API
    fetch(`${BASE_URL}/users`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  
  return (
    <div>
      <h1>Customer</h1>
      <ul className='usersName'>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
            <p>{user.name.firstname} {user.name.lastname}</p>
            </Link>
            </li>

       ))}
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
}

export default AllUsers;