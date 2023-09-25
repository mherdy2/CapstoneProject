import {Routes, Route} from 'react-router-dom'//importing routes
import AllProducts from './components/Products/allProducts.jsx'//importing all products
import Home from './components/home.jsx' //importing home function
import SingleProduct from './components/Products/SingleProduct.jsx' //importing single product
import Footer from './components/footer.jsx' //importing footer
import AllUsers from './components/Users/allUser.jsx'//importing all users
import SingleUser from './components/Users/singleUser.jsx' //importing single user
import Cart from './components/Cart/allCart.jsx' //importing carts all content
import GroupOrdersByUser from './components/Cart/userCart.jsx'
import Login from './components/Login/login.jsx' //importing login
import LoginSample from './components/Login/loginSample.jsx' //importing login


const App=()=>{
  return ( 
    <>
    <div id="main-section">
    <Routes>  
        <Route path="/login" element={<Login />} />      
        <Route path="/" exact element={<Home />} />      
        <Route path="allProducts" element={<AllProducts />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/allUser" element={<AllUsers />} />
        <Route path="/user/:userId" element={<SingleUser />} /> {/* Define a route for viewing a single user */}
        <Route path="/allCart" element={<Cart />} /> {/* Define a route for viewing a single user */}
        <Route path="/userCart" element={<GroupOrdersByUser />} /> {/* Define a route for viewing a single user */}
        <Route path="/footer" element={<Footer />} /> 
        <Route path="/loginSample" element={<LoginSample />} /> 
    </Routes>  
    <Footer/>  
    </div>     
    </>

  );
}

export default App;
