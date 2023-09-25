import { Link } from 'react-router-dom';
const NavBar=() =>{
  return (
      // navigation panel header    
      <div className='NavBar'>     
      <div><h2>FSA Fake Store 2023</h2></div> 
      <Link to="/" className='NavTab'>Home</Link>
      <Link to="/allProducts" className='NavTab'>Products</Link>
      {/* <Link to="/login" className='NavTab'>Login</Link> */}
      <Link to="/loginSample" className='NavTab'>SignUp / Log In</Link>         
      </div>
  
  );
}

export default NavBar;
