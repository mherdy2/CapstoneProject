import { Link } from 'react-router-dom';

const NavBar=({isLoggedIn}) =>{
  return (  
    <>
      <div className='NavBar'>     
      <div>
        <img
          src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/322555793_688709379636357_106021069714738332_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Tt80jmgrlCwAX-qdMnh&_nc_ht=scontent-sea1-1.xx&oh=00_AfBD37oUvwqlQ9as0-ADiLfr4_eX5RbzRNJSTg_aHybOZw&oe=65187728"
          alt="Logo"
          className="logo-image"
        />
      </div>
      <div className='storeName'><h2>FSA Fake Store 2023</h2></div> 
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
