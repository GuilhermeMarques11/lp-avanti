// Megamenu
const megaMenu = document.querySelectorAll('.megamenu');
const megaMeneuDropDown = document.querySelectorAll('.megamenu__dropdown');
const megaMeneuDropDownContent = document.querySelectorAll(
  '.megamenu__has-dropdown .megamenu__dropdown-content',
);
const menuItems = document.querySelectorAll('.main-menu__item');

megaMeneuDropDown.forEach((dropdown) => {
  dropdown.addEventListener('mouseenter', function () {
    megaMeneuDropDown.forEach((item) => {
      item.classList.remove('active');
    });

    megaMeneuDropDownContent.forEach((content) => {
      content.classList.remove('active');
    });

    this.classList.add('active');

    const menuId = this.getAttribute('data-menu');
    document.getElementById(menuId).classList.add('active');
  });
});

megaMenu.forEach((megaMenu) => {
  megaMenu.addEventListener('mouseenter', function () {
    const closestMenuItem = megaMenu.closest('.main-menu__item');

    closestMenuItem.classList.add('active');
  });
});

megaMenu.forEach((megaMenu) => {
  megaMenu.addEventListener('mouseleave', function () {
    megaMeneuDropDown.forEach((item) => {
      item.classList.remove('active');
    });
    megaMeneuDropDownContent.forEach((content) => {
      content.classList.remove('active');
    });
    megaMeneuDropDown[0].classList.add('active');
    megaMeneuDropDownContent[0].classList.add('active');
    this.closest('.main-menu__item').classList.remove('active');
  });
});

// Menu mobile
const openMenuMobile = document.querySelector('.menu-mobile__icon');
const menuMobile = document.querySelector('.menu-mobile');

function openMenu() {
  menuMobile.classList.add('active');
}

function closeMenu(event) {
  if (event.target === menuMobile) {
    menuMobile.classList.remove('active');
  }
}

openMenuMobile.addEventListener('click', openMenu);
menuMobile.addEventListener('click', closeMenu);
