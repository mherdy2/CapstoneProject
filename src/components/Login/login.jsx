import { useState } from 'react';
import BASE_URL from '../../API/index.js';
import './login.css'

function Login({ isLoggedIn, setLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        // Login successful
        setLoggedIn(true);
        setUsername(username); // Set the username when logged in
      } else {
        // Login failed, display an error or handle as needed
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='app'>
     {isLoggedIn ? (
        <p>Hello {username}</p>
      ) : (
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      
      <div className="home-container">
        <h1 className="home-heading">Welcome to FAKE STORE Marketplace Online!</h1>
        <img
          src="https://revistasalvador.com/wp-content/uploads/2018/10/Online-Shop.jpg"
          alt="Something"
          className="home-image"
        />
      </div>
    </div>
  );
}

export default Login;
