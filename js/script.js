const header = document.querySelector(".header-container");
const toggleClass = "is-sticky";
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 20) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});