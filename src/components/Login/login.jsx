import { useState } from 'react';
// import { Link } from 'react-router-dom';
import BASE_URL from '../../API/index.js';
import './login.css'
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

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
      } else {
        // Login failed, display an error or handle as needed
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div >
      <h2>Fake Store Log-In</h2>
      {loggedIn ? (
        <p>You are logged in as {username}</p>
        
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
    </div>
  );
}

export default Login;
