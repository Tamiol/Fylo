export function stickyHeader() {
  let header = document.querySelector('header');
  header?.classList.toggle('sticky', window.scrollY > 0);
}
