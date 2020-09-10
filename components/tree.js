export default function (data) {
  const tree = document.querySelector("nav#tree");

  const menu = document.createElement("ul");
  menu.classList.add("root");

  const firstLevel = data.filter((item) => !item.parent);

  const getFirstLis = firstLevel.map((item) => buildTree(item));

  getFirstLis.forEach((li) => menu.append(li));

  function buildTree(item, subMenuParent) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#">${item.name}</a>`;
    if (!item.parent) {
      li.classList.add("root");
    }

    const children = data.filter((child) => child.parent === item.id);

    if (children.length > 0) {
      li.addEventListener("mouseenter", (event) => {
        event.stopPropagation();
        event.target.classList.toggle("open");
      });

      li.addEventListener("mouseleave", (event) => {
        event.stopPropagation();
        event.target.classList.toggle("open");
      });

      li.classList.add("has-children");

      const subMenu = document.createElement("ul");

      if (!subMenuParent) {
        subMenu.classList.add("first-submenu");
      } else {
        subMenu.classList.add("last-submenu");
      }

      children
        .map((item) => buildTree(item, subMenu))
        .forEach((li) => subMenu.append(li));

      li.append(subMenu);
    }

    return li;
  }

  tree.append(menu);
}
