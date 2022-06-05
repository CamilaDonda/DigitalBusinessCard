
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/camiladonda" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/camila.donda" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="http://www.facebook.com/camiladmatielo" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="http://www.twitter.com/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </footer>
    );
}

export default Footer;