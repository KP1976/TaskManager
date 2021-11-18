const mobileHmaburgerMenu = document.querySelector('.mobile-hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerMenuBars = document.querySelectorAll(
  '.mobile-hamburger-menu__bar'
);
const hamburgerMenuShortBar = document.querySelector(
  '.mobile-hamburger-menu__bar--short'
);

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('menu-open');
  hamburgerMenuShortBar.classList.toggle('not-visible');
  hamburgerMenuBars[0].classList.toggle('rotate-right');
  hamburgerMenuBars[2].classList.toggle('rotate-left');
};

mobileHmaburgerMenu.addEventListener('click', toggleMobileMenu);
