import { Link } from 'react-router-dom';

const NavBar=({isLoggedIn}) =>{
  return (  
    <>
      <div className='NavBar'>     
      <div><h2>FSA Fake Store 2023</h2></div> 
      {isLoggedIn ?null: <Link to = '/login'></Link>}   
      <div>
      <Link to="/allProducts" className='NavTab'>Products</Link>
      <Link to="/customerCart" className='NavTab'> Basket</Link>
      <Link to="logout" className='NavTab'>Log-Out</Link>
    {isLoggedIn ?null: <Link to = '/login'>Log In</Link>}
    </div> 
    </div>   
    </>
  );
}

export default NavBar;
