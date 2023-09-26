import { Link } from 'react-router-dom';
const NavBar=({isLoggedIn}) =>{
  return (
      // navigation panel header    
      <div className='NavBar'>     
      <div><h2>FSA Fake Store 2023</h2></div> 
      <Link to="/" className='NavTab'>Home</Link>
      <Link to="/allProducts" className='NavTab'>Products</Link>
    {isLoggedIn ?null: <Link to = '/login'>Log In</Link>}
    </div>
  
  );
}

export default NavBar;
