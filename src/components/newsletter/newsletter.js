import React from 'react'
import './newsletter.css'
function Newsletter() {
    return (
        <div className="newsletterContainer">
            <p className="newsletterContainer-title">EDa.presse Newletter</p>
            <p className="newsletterContainer-text">Abonnez-vous à notre newletter</p>
            <div className="input-container">
                <input placeholder="Enter votre Email" />
                <span></span>
                <a>S'abonner</a>
            </div>

            <span className="newsletter-decoration-left"></span>
            <span className="newsletter-decoration-right"></span>
        </div>
    )
}

export default Newsletter
