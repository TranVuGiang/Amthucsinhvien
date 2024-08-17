import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Main_Option_Web.css';

function Main_Option() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://amthucsinhvien.click/data.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    // Function to shuffle array
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    // Shuffle products and pick 8 items
    const shuffledProducts = shuffleArray([...products])
        .slice(0, 8);

    const handleItemClick = (title, productID) => {
        navigate(`/information-food/${title}/${productID}`);
    }

    return (
        <div className="container">
            <h1 className="mt-0 mb-4 text-center" style={{color: '#990011FF'}}>Hôm nay ăn gì?</h1>
            <div className="row food-section text-center align-items-center justify-content-center">
                {shuffledProducts.map((product) => (
                    <div className="col-md-3 col-sm-6 food-item" style={{height: '320px'}} key={product.productID} onClick={() => {handleItemClick(product.title, product.productID)}}>
                        <img src={product.img} alt={product.title} style={{ width: "300px", height: "220px" }}/>
                        <div className="food-title">{product.title}</div>
                        <div className="food-description">{product.describe_title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main_Option;
