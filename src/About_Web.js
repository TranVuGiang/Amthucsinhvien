import "./css/About_Web.css";

function About() {
  return (
    <div id="wrapper-footer">
      <div class="container text-center my-5">
        <img
          src="https://amthucsinhvien.click/IMG/logo.jpg"
          alt="Logo"
          class="img-fluid mb-4"
          style={{ maxWidth: "150px" }}
        />
        <h1>Về chúng tôi</h1>
        <p class="lead">
          Được phát triển bởi sinh viên
          <br />
          Trường Cao Đẳng FPT - Polytechnic
        </p>
        <p>
          Ngày nay, các bạn sinh viên không chỉ trong nhiệm vụ học tập mà còn
          đắm mình vào đầy đủ các dịch vụ. Website này giúp các bạn hình thành
          thực đơn hàng ngày đảm bảo có đầy đủ món ngon - bổ - rẻ, đồng thời
          chất lượng dinh dưỡng. Nếu có bất kỳ câu hỏi nào hãy liên hệ với chúng
          tôi!
        </p>
        <p>
          Các bạn đừng quên ghé thăm chúng tôi để bàn luận, tìm hiểu thêm trên
          website cùng các bài viết chia sẻ về ẩm thực. Cảm ơn các bạn đã đến
          với website của <strong>ẨM THỰC SINH VIÊN</strong>.
        </p>
      </div>
      <div class="container">
        <div class="project-info">
            <h1>Dự án môn Phát Triển Bản Thân 2</h1>
            <p><strong>Giảng viên hướng dẫn:</strong> Th.s Thái Đình Lãm</p>
            <p><strong>Fanpage:</strong> <a href={"https://www.facebook.com/profile.php?id=100094749616117"}>
                  ẨM THỰC SINH VIÊN
                </a></p>
            <p><strong>Gồm các thành viên:</strong></p>
        </div>
        <div class="container team-container">
            <div class="row justify-content-center">
                <div class="col-md-2 team-member">
                    <img src="/IMG/nhan.png" alt="Thành Nhân" class="img-fluid"/>
                    <h3>Thành Nhân</h3>
                </div>
                <div class="col-md-2 team-member">
                    <img src="/IMG/tuan.jpg" alt="Minh Tuấn" class="img-fluid"/>
                    <h3>Minh Tuấn</h3>
                </div>
                <div class="col-md-3 team-member team-leader">
                    <img src="./IMG/giang.JPG" alt="Vũ Giang" class="img-fluid"/>
                    <h3>Vũ Giang</h3>
                    <h4>Trưởng nhóm</h4>
                </div>
                <div class="col-md-2 team-member">
                    <img src="/IMG/hoang.jpg" alt="Minh Hoàng" class="img-fluid"/>
                    <h3>Minh Hoàng</h3>
                </div>
                <div class="col-md-2 team-member">
                    <img src="/IMG/bao.jpg" alt="Thái Bảo" class="img-fluid"/>
                    <h3>Thái Bảo</h3>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default About;
