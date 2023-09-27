import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import AllProducts from './components/Products/allProducts.jsx'
import SingleProduct from './components/Products/SingleProduct.jsx' 
import Footer from './components/footer.jsx' 
import AllUsers from './components/Users/allUser.jsx'
import SingleUser from './components/Users/singleUser.jsx' 
import Cart from './components/Cart/allCart.jsx' 
import GroupOrdersByUser from './components/Cart/userCart.jsx'
import Login from './components/Login/login.jsx' 
import Logout from './components/Login/logout.jsx' 
import MyCart from './components/Cart/customerCart.jsx' 
import NavBar from './components/Navbar.jsx'

const App=()=>{

  const [ isLoggedIn, setLoggedIn ]  = useState (false)

  return ( 
    <>
    <div id="main-section">
    {isLoggedIn ? <NavBar isLoggedIn = {isLoggedIn}/> :null}    

    <Routes>  
        <Route path="/" element={<Login isLoggedIn = {isLoggedIn} setLoggedIn = {setLoggedIn}/>} />      
        <Route path="allProducts" element={<AllProducts />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/allUser" element={<AllUsers />} />
        <Route path="/user/:userId" element={<SingleUser />} /> 
        <Route path="/allCart" element={<Cart />} /> 
        <Route path="/userCart" element={<GroupOrdersByUser />} /> 
        <Route path="/footer" element={<Footer />} /> 
        <Route path="/customerCart" element={<MyCart />} /> 
        <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} />
  </Routes>  

    {isLoggedIn ? <Footer isLoggedIn = {isLoggedIn}/> :null}  
      
    </div>     
    </>
  );
}

export default App;
