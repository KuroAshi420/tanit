import React from 'react'
import './slider.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Slider() {
    return (
        <div className="container-fluid slider">
            <div classname="row" style={{ height: '100%', display: 'flex', position: 'relative' }}>
                <div className="col-md-6 slider-left">

                </div>
                <div className="col-md-6 slider-right">

                </div>
                <div className='container-fluid slider-section'>
                    <div className='slider-container'>
                        <button className="slider-btn"> <KeyboardArrowLeftIcon className="slider-btn-icons"/> </button>
                        <div className='text-container'>
                            <p className="slider-text">Pluribus Graecia <br /> habenas possit</p>
                            <button className="slider-btn-lorem">Lorem ipsum <span> <KeyboardArrowRightIcon/> </span> </button>
                        </div>

                        <button className="slider-btn"><KeyboardArrowRightIcon className="slider-btn-icons"/> </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Slider
