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
              <p>Lot VN 24 IBis Ankazolava Ambohitsoa, Madagascar</p>
            </div>
            <div className="contact-item">
              <span>Mobile: </span>
              <p>+261 33 12 160 06 | +33 7 64 24 60 48</p>
            </div>
            <div className="contact-item">
              <span>E-mail:</span>
              <p>contact.zakaranda@gmail.com</p>
            </div>
        </div>
      </div>
      <div className="footer__item">
        <ul className="footer__nav">
            <li><a href="http://kiadybezaka.com/demo-zakaranda#services">Services</a></li>
            <li><a href="http://kiadybezaka.com/demo-zakaranda#customers">Customers</a></li>
            <li><a href="http://kiadybezaka.com/demo-zakaranda#team">Team</a></li>
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
        <p>&copy; 2019, Zakaranda Web Agency</p>
      </div>
      </footer>
  );
}

export default Footer;
