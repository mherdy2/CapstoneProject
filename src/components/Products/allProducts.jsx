import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BASE_URL from '../../API/index';
import './products.css';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  useEffect(() => {
    // Fetch product data from the Fake Store API using the Fetch API
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    // Filter products based on searchQuery and selectedCategory when they change
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredProducts(filtered);
  }, [searchQuery, selectedCategory, products]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>On Sale</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by product name"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div className="category-select">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
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
                src={product.image} // Use the imageUrl property from your product data
                alt={product.title}
                className="product-image"
                style={{ width: '200px' }}
              />
              <div className='viewDetails'>
              <Link to={`/product/${product.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default AllProducts;
