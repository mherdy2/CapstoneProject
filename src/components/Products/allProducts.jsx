import { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import { fetchAllProducts } from '../../API/product';
import './products.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');


  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchAllProducts();
      setProducts(productsData);
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All Categories' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('MyCart')) || [];
    console.log('Item Added to Cart');
    const existingProductIndex = existingCart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('MyCart', JSON.stringify(existingCart));
  };

  return (
    <div className="app">
      <header className="search">
        <h1>On Sale</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="category-select">
          <label htmlFor="category">Category:</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All Categories">All Categories</option>
            {products.map((product) => (
              <option key={product.id} value={product.category}>
                {product.category}
              </option>
            ))}
          </select>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div className="product" key={product.id}>
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
              style={{ width: '200px' }}
            />
            <div className="button-container">
              <button className="buy-button" onClick={() => addToCart(product)}>Buy</button>
              <Link to={`/SingleProduct/${product.id}`} className="view-details-link">View Details</Link>
            </div>
          </div>
          
          ))}
        </div>
      </header>
    </div>
  );
}

export default ProductList;
