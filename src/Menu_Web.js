import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/Menu_Web.css";

function Menu() {
  const [products, setProducts] = useState([]);
  const [selectedType, setSelectedType] = useState("Bữa sáng");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type') || "Bữa sáng";
    const page = parseInt(queryParams.get('page'), 10) || 1;
    
    setSelectedType(type);
    setCurrentPage(page);

    fetch("https://amthucsinhvien.click/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [location.search]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
    navigate(`?type=${type}&page=1`);
  };

  const filteredProducts = products.filter(
    (product) => product.type[selectedType]
  );

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const productsToDisplay = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Hàm xáo trộn mảng
  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Xáo trộn các sản phẩm cần hiển thị
  const currentProducts = shuffleArray(productsToDisplay);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?type=${selectedType}&page=${pageNumber}`);
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  };

  const handleItemClick = (title, productID) => {
    navigate(`/information-food/${title}/${productID}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <aside className="menu">
            <div className="category">
              <div className="category-header">Các bữa ăn</div>
              <ul className="category-list list-unstyled">
                <li
                  className={`category-item ${selectedType === "Bữa sáng" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Bữa sáng")}
                >
                  Bữa sáng
                </li>
                <li
                  className={`category-item ${selectedType === "Bữa trưa" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Bữa trưa")}
                >
                  Bữa trưa
                </li>
                <li
                  className={`category-item ${selectedType === "Bữa tối" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Bữa tối")}
                >
                  Bữa tối
                </li>
              </ul>
            </div>
            <div className="category">
              <div className="category-header">Theo mùa</div>
              <ul className="category-list list-unstyled">
                <li
                  className={`category-item ${selectedType === "Mùa xuân" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Mùa xuân")}
                >
                  Mùa xuân
                </li>
                <li
                  className={`category-item ${selectedType === "Mùa hè" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Mùa hè")}
                >
                  Mùa hè
                </li>
                <li
                  className={`category-item ${selectedType === "Mùa thu" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Mùa thu")}
                >
                  Mùa thu
                </li>
                <li
                  className={`category-item ${selectedType === "Mùa đông" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Mùa đông")}
                >
                  Mùa đông
                </li>
                <li
                  className={`category-item ${selectedType === "Đặc biệt ( Mùa thi )" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Đặc biệt ( Mùa thi )")}
                >
                  Đặc biệt ( Mùa thi )
                </li>
              </ul>
            </div>
            <div className="category">
              <div className="category-header">Khác</div>
              <ul className="category-list list-unstyled">
                <li
                  className={`category-item ${selectedType === "Ăn vặt" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Ăn vặt")}
                >
                  Ăn vặt
                </li>
                <li
                  className={`category-item ${selectedType === "Giải khát" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Giải khát")}
                >
                  Giải khát
                </li>
                <li
                  className={`category-item ${selectedType === "Các món dinh dưỡng" ? "active" : ""}`}
                  onClick={() => handleTypeChange("Các món dinh dưỡng")}
                >
                  Các món dinh dưỡng
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="col-md-9">
          <h1 className="text-start ms-4" style={{ color: "#990011FF" }}>
            {selectedType}
          </h1>
          <div className="row">
            {currentProducts.map((product) => (
              <div key={product.productID} className="col-md-4 breakfast-item" onClick={() => {handleItemClick(product.title, product.productID)}}>
                <img
                  src={product.img}
                  alt={product.title}
                  style={{ width: "300px", height: "220px" }}
                />
                <h5>{product.title}</h5>
                <p>{product.describe_title}</p>
              </div>
            ))}
          </div>
          <nav aria-label="Page navigation" className="text-center mt-4">
            <ul className="pagination justify-content-center">
              {Array.from(
                { length: Math.ceil(filteredProducts.length / itemsPerPage) },
                (_, index) => (
                  <li
                    key={index + 1}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                      aria-label={`Page ${index + 1}`}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Menu;
