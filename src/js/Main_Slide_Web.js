import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Main_Web.css';

function Main_Slide() {
  const [product, setProduct] = useState([]);
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("https://amthucsinhvien.click/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle the product array
        const shuffledProducts = shuffleArray(data);
        setProduct(shuffledProducts);
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

  // Create groups of items for carousel
  const getCarouselItems = () => {
    let carouselItems = [];
    for (let i = 0; i < product.length; i += itemsPerPage) {
      const itemsGroup = product.slice(i, i + itemsPerPage);
      carouselItems.push(itemsGroup);
    }
    return carouselItems;
  };

  const carouselItems = getCarouselItems();

  return (
    <main className="container py-4 mb-5">
      <section
        id="foodCarousel"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {carouselItems.map((items, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="row">
                {items.map((item) => (
                  <div className="col-md-4 mt-3" key={item.productID}>
                    <img
                      src={item.img}
                      className="d-block w-100"
                      style={{ width: "350px", height: "350px" }}
                      alt={item.title}
                    />
                    <div className="d-none d-md-block">
                      <h5 className="fs-3 text-center mt-3">{item.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#foodCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#foodCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
      <div className="text-center mb-4">
        <button className="btn custom-button">
          <Link className="nav-link" to="/thuc-don">Xem thêm</Link>
        </button>
      </div>
    </main>
  );
}

export default Main_Slide;
