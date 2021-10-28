import React from 'react';
import './imgSection.css';
import img1 from '../../source/1.jpg'
import img2 from '../../source/1.jpg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function ImgSection() {
    return (
        <div className="container" style={{marginTop:"50px"}}>
            <div className="row">
                <div className="col-md-6 img-container a1">
                    <img src={img1} />
                    <div className="img-text">
                        <p className="img-titles">Nos succès</p>
                    </div>

                </div>
                <div className="col-md-6 img-container">
                    <img src={img2} />
                    <div className="img-text">
                        <p className="img-titles">Dernières <br/> interview-rencontre</p>
                        <p className="img-descreption-text">Nec sane haec sola pernicies orientem diversis cladibus adfligebat. Namque et Isauri, quibus est usitatum saepe pacari saepeque inopinis excursibus cuncta miscere, ex</p>
                    </div>
                    <p className="img-link">Lorem ipsum <KeyboardArrowRightIcon/></p>
                </div>
                <div className="col-md-8 img-container">
                    <img src={img1} />
                    <div className="img-text">
                        <p className="img-titles">Qui sommes nous</p>
                    </div>

                </div>
                <div className="col-md-4 img-container">
                    <img src={img2} />
                    <div className="img-text">
                        <p className="img-titles">Promo</p>
                    </div>
                </div>
                <div className="col-md-6 img-container">
                    <img src={img1} />
                    <div className="img-text">
                        <p className="img-titles">Edito</p>
                    </div>
                </div>
                <div className="col-md-6 img-container">
                    <img src={img2} />
                    <div className="img-text">
                        <p className="img-titles">L'emploi chez nous</p>
                    </div>
                </div>
                <div className="col-md-8 img-container">
                    <img src={img1} />
                    <div className="img-text">
                        <p className="img-titles">Film d'entreprise</p>
                    </div>
                </div>
                <div className="col-md-4  img-container">
                    <img src={img2} />
                    <div className="img-text">
                        <p className="img-titles">Vos Contact</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgSection
