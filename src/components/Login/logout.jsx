// Logout.js
import './login.css'


const Logout = ({ onLogout }) => {
  const handleLogout = () => {
   
    onLogout();
  };

  return (
    <div className='app'>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <h2>Thank you for Shopping</h2>
      <button className="btnCheck" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
