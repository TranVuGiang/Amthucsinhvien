import 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header_Web.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    // Kiểm tra độ cao cuộn để thay đổi kiểu dáng của header
    if (window.scrollY > 0) { // Thay đổi giá trị theo nhu cầu
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`text-white py-3 header-fixed ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link to="/Home" className="text-decoration-none text-white">
            <img
              src="https://static.wixstatic.com/media/27ef21_bdc6fe4785c04d6c9ad60d9fa9584c93~mv2.png/v1/fill/w_66,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/kisspng-service-brand-company-clip-art-food-contact-us-pinku-gupta-cook-and-caters-5ba310e.png"
              alt="logo"
              className="me-2"
            />
            <span className="h4 mb-0 text-black fw-bold">ẨM THỰC SINH VIÊN</span>
          </Link>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler bg-black"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active text-black fs-5 fw-bold" to="/trang-chu">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black fs-5 fw-bold" to="/thuc-don">
                    Thực đơn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-black fs-5 fw-bold" to="/ve-chung-toi">
                    Giới thiệu
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
