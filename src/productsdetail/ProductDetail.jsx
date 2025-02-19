import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const productDetails = useMemo(() => {
    if (!product) return <h1>Loading...</h1>;
    return (
      <div className="product-container">
        <h1 className="product-title">{product.title}</h1>
        <div className="product-content">
          <img className="product-image" src={product.thumbnail} alt={product.title} />
          <div className="product-details">
            <h4>{product.description}</h4>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
        </div>
      </div>
    );
  }, [product]);

  return productDetails;
}

export default ProductDetail;
