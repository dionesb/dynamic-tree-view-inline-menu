import Tree from "./tree.js";

const menu = [
  { id: 1, name: "Home", parent: null },
  { id: 2, name: "Pages", parent: null },
  { id: 3, name: "Shop", parent: null },
  { id: 4, name: "Cart", parent: 3 },
  { id: 5, name: "Checkout", parent: 3 },
  { id: 6, name: "Products", parent: 3 },
  { id: 7, name: "Books", parent: 6 },
  { id: 8, name: "Eletronics", parent: 6 },
  { id: 9, name: "Smartphones", parent: 6 },
  { id: 10, name: "About", parent: 2 },
  { id: 11, name: "Contact", parent: 2 },
  { id: 12, name: "Login", parent: 2 },
  { id: 13, name: "Contact 1", parent: 11 },
  { id: 14, name: "Contact 2", parent: 11 },
  { id: 15, name: "Addess", parent: 13 },
];

Tree(menu);
