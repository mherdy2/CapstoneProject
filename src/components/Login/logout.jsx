// Logout.js
import { useNavigate } from 'react-router-dom';
import './login.css'


const Logout = ({setLoggedIn}) => {
  const navigate = useNavigate();
  const handleLogout = () => {   
    setLoggedIn(false);
    navigate("/")
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
