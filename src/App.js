import './App.css';
import Footer from './components/footer/footer';
import ImgSection from './components/imgSection/ImgSection';
import Marque from './components/marques/marque';
import Navbar from './components/navbar/navbar';
import Newsletter from './components/newsletter/newsletter';
import Slider from './components/slider/slider.js';

function App() {
    return ( <div className = "App" >
  <Navbar/>
  <Slider/>
  <ImgSection/>
  <Marque/>
  {/* <Newsletter/> */}
  <Footer/>
        </div>
    );
}

export default App;