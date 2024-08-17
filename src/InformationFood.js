import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/InformationFood.css";

function Information() {
  const prop = useParams();
  console.log(prop.productID);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://amthucsinhvien.click/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const currentProducts = product.find(
    (item) => item.productID === parseInt(prop.productID, 10)
  );
  console.log(currentProducts);
  if (!currentProducts) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container">
      <div className="content ms-5 me-5">
        <h1 className="recipe-title fw-bold ">{currentProducts.title}</h1>
        <p className="description fs-4">{currentProducts.describe_title}</p>
        <img src={currentProducts.img} alt={currentProducts.title} style={{width: "500px", height: "360px"}}/>
        <p className="description fs-4">
          <strong>Nguyên liệu: </strong>
          {currentProducts.describe_info}
        </p>

        <div className="cooking-steps">
          {currentProducts.describe_cook.map((cook) => (
            <div className="step" key={cook.title}>
              <h3 className="step-title fs-4">• {cook.title}</h3>
              <p className="fs-4">{cook.describe_cook}</p>
            </div>
          ))}
        </div>

        <p className="utility fs-4">Công dụng: {currentProducts.utility}</p>
      </div>
    </div>
  );
}

export default Information;
