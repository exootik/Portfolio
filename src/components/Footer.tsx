
const LINKEDIN_URL = 'https://www.linkedin.com/in/simon-billet'
const ITCH_URL = 'https://billetsimon.itch.io'
const MAILTO = 'mailto:simonbillet4@gmail.com'

// Icons
import iconLinkedin1 from '../assets/icons/linkedin1.png';
import iconLinkedin2 from '../assets/icons/linkedin2.png';
import iconGmail1 from '../assets/icons/gmail1.png';
import iconGmail2 from '../assets/icons/gmail2.png';
import iconJeux1 from '../assets/icons/jeux1.png';



export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-left muted">© Simon Game Dev</div>
        <div className="footer-links">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-link">
            <img
              src={iconLinkedin1}
              alt="LinkedIn — Simon Billet"
              width="20"
              height="20"
              loading="lazy"
            />          
          </a>
          <a href={MAILTO} className="icon-link" aria-label="Email">
            <img
              src={iconGmail1}
              alt="Envoyer un email — Simon Billet"
              width="20"
              height="20"
              loading="lazy"
            />
          </a>
          <a href={ITCH_URL} target="_blank" rel="noreferrer" className="icon-link" aria-label="Itch.io">
            <img
              src={iconJeux1}
              alt="Itch.io — jeux de Simon Billet"
              width="20"
              height="20"
              loading="lazy"
            />          
          </a>
        </div>
      </div>
    </footer>
  )
}
