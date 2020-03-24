import shoppingList from "./shopping-list.js";
import "../styles/index.css"

const main = function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
