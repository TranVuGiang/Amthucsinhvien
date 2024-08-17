import './css/Main_Web.css'
import MainOption from "./js/Main_Option_Web"
import MainSlide from "./js/Main_Slide_Web"
import MainType from "./js/Main_Type_Web"

function Main() {
    return (
      <div id="wrapper">
        <MainSlide />
        <MainOption />
        <MainType />
      </div>
    )
}

export default Main
