const hb = document.getElementById("hamburger");
const st = document.getElementById("site-top");
const menu = document.getElementById("menu");
hb.addEventListener("click", () => {
  menu.classList.remove("no-anim")
  st.classList.toggle("nav-open");
  menu.classList.toggle("open");
});
