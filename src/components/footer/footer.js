import React from 'react'
import Newsletter from '../newsletter/newsletter'
import "./footer.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import Footertwo from './footertwo'
function Footer() {
    return (
        <div className="footer">
            <div className="newletterfooter">
                <Newsletter/>
            </div>
            <div className='container-footer-header'>
                <div className="logo-footer">
                    <div className="toplogo-footer">
                        <p className="logo-eda-footer">eda</p>
                        <p className="logo-point-footer">.</p>
                        <p className="logo-presse-footer">presse</p>
                    </div>
                    <div className="bottomlogo-footer">
                        <p>Edition de l'Avenir Press</p>
                    </div>
                </div>

                <div className='social'>
                    <p>Suivez-nous</p>
                    <a><FontAwesomeIcon icon={faFacebookF} className="footer-social-icons"/>
</a>
                    <span className="separation"></span>
                    <a><FontAwesomeIcon icon={faLinkedinIn} className="footer-social-icons"/></a>
                    <button> Vos contact <span> <KeyboardArrowRightIcon/> </span> </button>
                </div>
            </div>
            <div className='container media-footer-container'>
                <p>Nos médias et services</p>
                <div className="sevices-container">
                    <div className="service">
                        <img />
                    </div>
                    <div className="service">
                        <img />
                    </div>
                    <div className="service">
                        <img />
                    </div>
                    <div className="service">
                        <img />
                    </div>
                    <div className="service">
                        <img />
                    </div>
                    <div className="service">
                        <img />
                    </div>
                </div>

            </div>
            <div className='footer-separation'>
                <p>Editions de L'avenir Presse</p>
                <p>Membre de Lapresse.be</p>
            </div>
            <div className="footer-navigation">
                <ul>
                    <p>Actualité</p>
                    <li> <a>Interviews rencontres</a></li>
                    <li> <a>Nos succès</a></li>
                    <li> <a>La vie en Wallonie</a> </li>
                </ul>

                <ul>
                    <p>Qui sommes-nous ?</p>
                    <li> <a>Notre entreprise</a></li>
                    <li> <a>Nos activités</a></li>
                    <li> <a>Notre engagement</a> </li>
                    <li> <a>Historique</a></li>
                    <li> <a>IPM group</a></li>
                </ul>


                <ul>
                    <p>L'emploi chez nous</p>
                    <li> <a>Notre politique RH et bien etre</a></li>
                    <li> <a>Les visages de l'avenir</a></li>
                    <li> <a>Nos offre d'emlpoi</a> </li>
                    <li> <a>Nos offre de stages</a></li>
                    <li> <a>Visitez nos bureaux</a></li>
                </ul>

                <ul>
                    <p>Nos services</p>
                    <li> <a>Publicité (RMR) </a></li>
                    <li> <a>Abonnements</a></li>
                    <li> <a>Diversification</a> </li>
                </ul>
            </div>

            <Footertwo/>
        </div>

    )
}

export default Footer
