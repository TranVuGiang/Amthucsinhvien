import { Route, Routes } from "react-router-dom"
import About from "./About_Web"
import Footer from "./Footer_Web"
import Header from "./Header_Web"
import InformationFood from "./InformationFood"
import Main from "./Main_Web"
import Menu from "./Menu_Web"





function App() {
  return (

      <div id="wrapper">
        <Header />
        <div style={{marginTop: '150px'}}>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/trang-chu" element={<Main />} />
          <Route path="/thuc-don" element={<Menu />} />
          <Route path="/ve-chung-toi" element={<About />} />
          <Route path="/information-food/:title/:productID" element={<InformationFood />} />
        </Routes>
        </div>
        <Footer/>
      </div>
  );

}



export default (App)