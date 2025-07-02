import './App.css'
import ProductUploadForm from './Components/Check'
import Fotter from './Components/Fotter/Fotter'
import Header from './Components/Header/Header'
import TryGoggles from './Components/Page'
import BannerSlider from './Components/Slider/Slider'
import TestimonialSlider from './Components/TestimonialSlider/TestimonialSlider'
import Video from './Components/VideoSection/Video'

function App() {


  return (
    <>
{/* <TryGoggles/> */}
<ProductUploadForm/>
<Header/>
<BannerSlider/>
<Video/>
<TestimonialSlider/>
<Fotter/>
    </>
  )
}

export default App
