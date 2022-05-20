// let products = [
//   "Underpants:6.99",
//   "Socks:5.99",
//   "T-shirt:14.99",
//   "Trousers:31.99",
//   "Shoes:23.99",
// ];
// let total=0
// for (const element of products) {
//   const separeted = element.split(":");
//   const price = Number(separeted[1]);
//   total+=price
//   console.log(separeted);
// }
// ____________________
const list = document.querySelector("#ul");
const searchInput = document.querySelector("#searchBox");
const searchBtn = document.querySelector("#submitBtn");
console.log(searchBtn);

// list.innerHTML = " kljkl";

const myHistory = [];

searchBtn.onclick = function () {
  // console.log("rklk");
  // we will only allow a term to be entered if the search input isn't empty

  console.log(myHistory);
  // number 1
  myHistory.unshift(searchInput.value);
  // If the array length is 5 or more, remove the oldest search term
  if (myHistory.length === 6) {
    myHistory.pop();
  }
  // empty the list so that we don't display duplicate entries
  // the display is regenerated every time a search term is entered.
  list.innerHTML = "";

  // loop through the array, and display all the search terms in the list
  for (const itemText of myHistory) {
    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    list.appendChild(listItem);
  }

  // empty the search input and focus it, ready for the next term to be entered
  searchInput.value = "";
  searchInput.focus();
};
