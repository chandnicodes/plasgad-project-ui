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
