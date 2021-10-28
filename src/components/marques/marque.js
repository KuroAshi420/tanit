import React from 'react'
import './marque.css'
import Logo1 from '../../source/logo1.png'
import Logo2 from '../../source/logo2.jpg'
import Logo3 from '../../source/logo3.jpg'
import Logo4 from '../../source/logo4.png'
function Marque() {
    return (
        <div className="container" style={{marginTop:"103px"}}>
            <h5 className="marque-title">Nos marques</h5>

            <div className="row marque-container">
                <div className="col-md-3 marque-logo-container">
                    <img src={Logo1} />
                </div>
                <div className="col-md-3 marque-logo-container">
                    <img src={Logo2} />
                </div>
                <div className="col-md-3 marque-logo-container">
                    <img src={Logo3} />
                </div>
                <div className="col-md-3 marque-logo-container">
                    <img src={Logo4} />
                </div>
            </div>
        </div>
    )
}

export default Marque
