import React from 'react'
import './navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
function Navbar() {
    return (
        <div className="container navigationBar">
            <div className='topbar'>
                <a>Inscription newsletter</a>
                <span className="separation"></span>
                <a><FontAwesomeIcon icon={faFacebookF} className="nav-social-icons"/></a>
                <span className="separation"></span>
                <a><FontAwesomeIcon icon={faLinkedinIn} className="nav-social-icons"/></a>
            </div>
            <div className="navbar">
                <div className="logo">
                    <div className="toplogo">
                        <p className="logo-eda">eda</p>
                        <p className="logo-point">.</p>
                        <p className="logo-presse">presse</p>
                    </div>
                    <div className="bottomlogo">
                        <p>Edition de l'Avenir Press</p>
                    </div>
                </div>
                <div className="navigation">
                    <ul className="navigation-list">
                        <li>
                            <a>Actualités <KeyboardArrowDownIcon/></a>
                        </li>
                        <li>
                            <a>Qui sommes-nous <KeyboardArrowDownIcon/></a>
                        </li>
                        <li>
                            <a>L'emploi chez nous <KeyboardArrowDownIcon/></a>
                        </li>
                        <li>
                            <a>Nos services <KeyboardArrowDownIcon/></a>
                        </li>
                        <li>
                            <a>Vos contact</a>
                        </li>
                        <li>
                            <div className="search-navbar">
                            <SearchIcon className="loopIcon"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
