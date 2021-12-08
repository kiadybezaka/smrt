import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__item">
        <h3>Conveniently exploit an expanded array.</h3>
        <p>Efficiently plagiarize tactical infomediaries before competitive networks. Completely envisioneer leveraged technology through synergistic partnerships. Monotonectally syndicate performance.</p>
      </div>
      <div className="footer__item">
        <div className="footer__contact">
            <div className="contact-item">
              <span>Address:</span>
              <p>32 Bis Bd Montaigut, 94000, CRETEIL </p>
            </div>
            <div className="contact-item">
              <span>Mobile: </span>
              <p>+261 33 13 160 06 | +33 7 65 24 60 48</p>
            </div>
            <div className="contact-item">
              <span>E-mail:</span>
              <p>contact.smrt@gmail.com</p>
            </div>
        </div>
      </div>
      <div className="footer__item">
        <ul className="footer__nav">
            <li><a href="/">Services</a></li>
            <li><a href="/">Customers</a></li>
            <li><a href="/">Team</a></li>
        </ul>
      </div>
      <div className="footer__item">
        <ul className="footer__icons">
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><span className="sr-only">icon</span><i className="fa fa-facebook-square"></i></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><span className="sr-only">icon</span><i className="fa fa-linkedin-square"></i></a></li>
            <li><a href="https://www.viadeo.com/" target="_blank" rel="noopener noreferrer"><span className="sr-only">icon</span><i className="fa fa-viadeo-square"></i></a></li>
        </ul>
      </div>
      <div className="footer__text">
        <p>&copy; 2021, React Create App</p>
      </div>
      </footer>
  );
}

export default Footer;
