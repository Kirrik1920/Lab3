import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faSquareGithub, faTelegram} from "@fortawesome/free-brands-svg-icons";
import "./contacts.css"
function Contacts(){
    return (
        <div className="contacts-container">
            <div className="title">
                Todo-list on react
            </div>
            <div className="subtitle">
                By Kiias Kirill
            </div>
            <div className="links">
                <a className = "contact-item" href ="https://t.me/Kirik1920">
                <FontAwesomeIcon className="link" icon={faTelegram} />
                </a>
                <a className = "contact-item" href="https://www.instagram.com/_kirik13_/">
                <FontAwesomeIcon className="link" icon={faInstagram} />
                </a>
                <a className = "contact-item" href="https://github.com/Kirrik1920">
                <FontAwesomeIcon className="link" icon={faSquareGithub} />
                </a>
               
                
                
            </div>
        </div>
    )
}


export default Contacts;