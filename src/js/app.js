import { Modal } from './components/modal';

import './polyfill/polyfill';

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

const projectItemBtns = document.querySelectorAll('.js-open-project-item');
if(projectItemBtns) {
    projectItemBtns.forEach(projectItemBtn => {
        projectItemBtn.addEventListener('click', function() {
            const modal = new Modal();
            const details = projectItemBtn.querySelector('.js-project-details').innerHTML;
            modal.open(details, 'big');
        });
    });
}


function sticky(menu) {
    const posCurseur = this.pageYOffset;
    if (325 - posCurseur < 1) {
        menu.classList.add('sticky');
    }
    if (posCurseur < 325) {
        menu.classList.remove('sticky');
    }
}

const menu = document.querySelector('.header');
if(menu) {
    window.addEventListener('scroll', sticky(menu));
}

// setInterval(createRainDrop, 700);
// function createRainDrop() {
//     var icon = document.createElement('i');
//     document.querySelector('.main-background').appendChild(icon);
//     icon.classList.add('fa');
//     icon.classList.add('fa-tint');
//     icon.style.width = Math.random() * 10 + 10 + 'px';
//     icon.style.fontSize = '20px';
//     icon.style.left = Math.random() * (window.innerWidth + 0) + 0 + 'px';
//     icon.style.top = '100px';
//     icon.style.animationDuration = '2s';
//     icon.style.opacity = Math.random();

//     setTimeout(() => {
//         icon.remove();
//     }, 5000);
// }
