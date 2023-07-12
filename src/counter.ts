// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0;
//   const setCounter = (count: number) => {
//     counter = count;
//     element.innerHTML = `count is ${counter}`;
//   };
//   element.addEventListener("click", () => setCounter(++counter));
//   setCounter(0);
// }

export function stickyHeader() {
  let header = document.querySelector("header");
  header?.classList.toggle("sticky", window.scrollY > 0);
}
