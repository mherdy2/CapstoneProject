import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductById } from "../../API/product";

export default function ProductSingle() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await fetchProductById(id);
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  function addToCart(product) {
    const existingCart = JSON.parse(localStorage.getItem("MyCart")) || [];
    console.log("Item Added to Cart");
    const existingProduct = existingCart.findIndex((item) => item.id === product.id);

    if (existingProduct !== -1) {
      existingCart[existingProduct].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("MyCart", JSON.stringify(existingCart));
  }

  return (
    <>
      <div className="product-single">
        <div key={product.id} className="product-details">
          <h4>{product.title}</h4>
          <img src={product.image} width="200px" height="200px" alt={product.title} />
          <p>
            <strong>Category</strong>: {product.category}
          </p>
          <p>
            <strong>Price</strong>: ${product.price}
          </p>
          <p>
            <strong>Description</strong>: {product.description}
          </p>
          <button onClick={() => navigate('/allProducts')}>Keep Shopping</button>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </>
  );
}
