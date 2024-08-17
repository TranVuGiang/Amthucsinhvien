import "./css/Footer_Web.css";

function Footer() {
  return (
    <div id="wrapper-footer">
      <footer className="footer mt-5" >
        <div className="container">
          <div className="row">
            <div className="footer-logo d-flex justify-content-center col-md-6 mb-4 mb-md-0">
              <img
                src="https://amthucsinhvien.click/IMG/logo.jpg"
                alt="Ẩm Thực Sinh Viên"
                className="img-fluid"
                style={{ width: "150px", height:"150px"}}
              />
              <h3 className="mt-5 fw-bold fs-1">ẨM THỰC SINH VIÊN</h3>
            </div>
            <div className="footer-text col-md-6 d-flex align-items-center">
              <p>
                Fanpage:{" "}
                <a href={"https://www.facebook.com/profile.php?id=100094749616117"}>
                  ẨM THỰC SINH VIÊN
                </a>
                <br />
                Chia sẻ những món ăn ngon bổ rẻ dành cho sinh viên không chỉ giúp
                tiết kiệm chi phí mà còn là cơ hội để cùng nhau khám phá những
                hương vị mới lạ. Đó cũng là dịp để gắn kết tình bạn, tạo ra những
                kỷ niệm đẹp và lan tỏa niềm vui giản dị trong cuộc sống hằng ngày.
                Từ những bữa ăn đơn giản nhưng đầy đủ dinh dưỡng, sinh viên có thể
                học cách trân trọng và biết ơn những điều nhỏ bé nhưng ý nghĩa.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
