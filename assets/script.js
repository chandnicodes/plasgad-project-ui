const routerRow = document.querySelector(`#router-row`);
const routes = {};
let cleanupFunctionsns = [];
const initRoute = (id) => {
  const routeElement = document.querySelector(`#${id}`);
  routes[id] = routeElement;
  routeElement.remove();
};
const setRoute = (id, clicked = false) => {
  cleanupFunctionsns.forEach((fn) => fn());
  cleanupFunctionsns = [];
  while (routerRow.firstChild) {
    routerRow.removeChild(routerRow.firstChild);
  }
  routerRow.appendChild(routes[id]);
  requestAnimationFrame(() => {});
};
initRoute(`tab-1`);
initRoute(`tab-2`);
initRoute(`tab-3`);
setRoute(`tab-1`);
document.querySelectorAll(`.tabs-row [data-link]`).forEach((link) => {
  const clickHandler = () => {
    setRoute(link.getAttribute("data-link"), true);
  };
  link.addEventListener("click", clickHandler);
});
const tab = document.getElementsByClassName("tabs");
for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active-tab");
    current[0].className = current[0].className.replace("active-tab", "");
    this.className += " active-tab";
  });
}

const sectionscroll = document.querySelectorAll(".scrolls");
const icons = document.querySelectorAll(".img-group-tab .img-group-inner a");
window.onscroll = () => {
  var current = "";

  sectionscroll.forEach((scrolls) => {
    const scrollsTop = scrolls.offsetTop;
    if (pageYOffset >= scrollsTop - 20) {
      current = scrolls.getAttribute("id");
    }
  });

  icons.forEach((a) => {
    a.classList.remove("activeclass");
    if (a.classList.contains(current)) {
      a.classList.add("activeclass");
    }
  });
};
// jquery
$(document).ready(function () {
  $('.toggle_sidenav').click(function () {
      $('.sidenav').toggle()
  })
});