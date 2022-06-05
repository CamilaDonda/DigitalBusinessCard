import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Buttons() {
    return (
        <div className="buttons-container">
            <a href="mailto: camiladonda@gmail.com" rel="noreferrer" target="_blank">
                <button className="email-button" type="button">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Email</span>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/camila-donda/" rel="noreferrer" target="_blank">
                <button className="linkedin-button" type="button">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    <span>LinkedIn</span>
                </button>
            </a>
        </div>
    );
}

export default Buttons;