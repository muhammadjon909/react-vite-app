import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Carusel.css";

function CustomCarousel({ search }) {
    const totalCarouselItems = 15;
    const itemsPerPage = 5;
    const [index, setIndex] = useState(0);
    const [carouselProducts, setCarouselProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setCarouselProducts(data.products.slice(0, totalCarouselItems));
                setAllProducts(data.products);
                setSortedProducts(data.products);
            });
    }, []);

    const filteredProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(search)
    );

    const nextSlide = () => {
        if (index < totalCarouselItems - itemsPerPage) {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex((prevIndex) => prevIndex - 1);
        }
    };

    const sortByPriceAsc = () => {
        const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);
    };

    const sortByPriceDesc = () => {
        const sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
    };

    const sortByRatingAsc = () => {
        const sorted = [...sortedProducts].sort((a, b) => a.rating - b.rating);
        setSortedProducts(sorted);
    };

    const sortByRatingDesc = () => {
        const sorted = [...sortedProducts].sort((a, b) => b.rating - a.rating);
        setSortedProducts(sorted);
    };

    return (
        <div>
            <div className="sort-buttons">
                <button className="reginch" onClick={sortByPriceAsc}>price drop</button>
                <button className="reginch" onClick={sortByPriceDesc}>price up</button>
                <button className="reginch" onClick={sortByRatingAsc}>rating drop</button>
                <button className="reginch" onClick={sortByRatingDesc}>reting up</button>
            </div>

            <div className="carousel-container">
                <button className="carousel-btn left" onClick={prevSlide} disabled={index === 0}>
                    ❮
                </button>

                <div className="carousel-wrapper">
                    {carouselProducts.slice(index, index + itemsPerPage).map((product) => (
                        <div key={product.id} className="carousel-box" 
                            onClick={() => navigate(`/product/${product.id}`)}> 
                            <img src={product.thumbnail} alt={product.title} className="carousel-img" />
                            <h5>{product.title}</h5>
                            <p>Price: ${product.price}</p>
                            <p>Rating: {product.rating}</p>
                        </div>
                    ))}
                </div>

                <button className="carousel-btn right" onClick={nextSlide} disabled={index >= totalCarouselItems - itemsPerPage}>
                    ❯
                </button>
            </div>

            <div className="products_div">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="bx_div" onClick={() => navigate(`/product/${product.id}`)}>
                        <img src={product.thumbnail} alt={product.title} className="product-img" />
                        <h5>{product.title}</h5>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomCarousel;
