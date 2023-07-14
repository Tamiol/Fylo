import { stickyHeader } from './header';

window.addEventListener('scroll', () => stickyHeader());

const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile_nav');

hamburger?.addEventListener('click', function () {
  hamburger?.classList.toggle('is_active');
  mobile_menu?.classList.toggle('is_active');
});
