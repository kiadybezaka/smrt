import { useEffect } from 'react';
import './Header.scss';

function Header() {
  const attachEvents = () => {
    const menuOpenBtn = document.querySelector('.js-menu-open-icon');
    if(menuOpenBtn) {
        menuOpenBtn.addEventListener('click', function() {
            document.querySelector('.js-menu-open-icon').classList.add('sr-only');
            document.querySelector('.js-menu-close-icon').classList.remove('sr-only');
            document.querySelector('.js-mobile-menu').classList.add('open');
        });
    }


    const menuCloseBtn = document.querySelector('.js-menu-close-icon');
    if(menuCloseBtn) {
        menuCloseBtn.addEventListener('click', function() {
            document.querySelector('.js-menu-close-icon').classList.add('sr-only');
            document.querySelector('.js-menu-open-icon').classList.remove('sr-only');
            document.querySelector('.js-mobile-menu').classList.remove('open');
        });
    }

    const menuItemBtns = document.querySelectorAll('.js-mobile-menu-item');
    if(menuItemBtns) {
        menuItemBtns.forEach(menuItemBtn => {
            menuItemBtn.addEventListener('click', function() {
                document.querySelector('.js-menu-close-icon').classList.add('sr-only');
                document.querySelector('.js-mobile-menu').classList.remove('open');
            });
        });
    }
  }
  const sticky = (menu) => {
    const posCurseur = window.pageYOffset;
    if (325 - posCurseur < 1) {
        menu.classList.add('sticky');
    }
    if (posCurseur < 325) {
        menu.classList.remove('sticky');
    }
  }
  useEffect(()=>{
    const menu = document.querySelector('.header');
    if(menu) {
        window.addEventListener('scroll', () => {
          sticky(menu);
        });
    }
    attachEvents();
  },[]);

  return (
    <>
      <header>
         <div className="headerDesktop">
            <div className="headerDesktop__logo"><img src="http://kiadybezaka.com/zakaranda/images/logo.png" width="150" height="30" alt="company-logo"/></div>
         </div>
         <div className="header">
            <a className="header__mobile-menu-open-btn js-menu-open-icon" href="/">
              <span className="sr-only">open</span>
              <i className="fa fa-bars"></i>
            </a>
            <img className="header__logo" src="http://kiadybezaka.com/zakaranda/images/logo.png" width="150" height="30" alt="company-logo"/>
            <a className="header__mobile-menu-close-btn js-menu-close-icon sr-only" href="/">
              <span className="sr-only">close</span>
              <i className="fa fa-times"></i>
            </a>
            <nav className="header__nav">
               <ul>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">Customers</a></li>
                  <li><a href="/">Team</a></li>
                  <li><a href="/">Contact us</a></li>
               </ul>
            </nav>
         </div>
      </header>
      <div className="headerMobile js-mobile-menu">
         <ul>
            <li><a className="js-mobile-menu-item" href="/">Services</a></li>
            <li><a className="js-mobile-menu-item" href="/">Customers</a></li>
            <li><a className="js-mobile-menu-item" href="/">Team</a></li>
            <li><a className="js-mobile-menu-item" href="/">Contact us</a></li>
         </ul>
      </div>
    </>
  );
}

export default Header;
