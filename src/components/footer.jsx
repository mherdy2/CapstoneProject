import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-links">
      <div><h4>CAPSTONE Project</h4></div> 
      {/* <Link to="/allProducts">Products</Link>      */}
      <Link to="/allUser">Customer list</Link>
      <Link to="/allCart">Carts</Link>
      </div>
      <div >
        <p>FSA CAPSTONE PROJECT by: <a href="https://github.com/mherdy2">Maui Bautista</a> © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
