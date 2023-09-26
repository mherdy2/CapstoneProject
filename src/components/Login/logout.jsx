import { useState } from 'react';


function Logout() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform your login logic here, set loggedIn to true if login is successful.
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform any necessary cleanup, like clearing user data from state
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>You are logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default Logout;
