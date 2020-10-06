const itemsList = document.getElementById("items-list");
const itemDetails = document.getElementById("item-details");
const btn2018 = document.getElementById("btn-2018");
const btn2019 = document.getElementById("btn-2019");
const year = document.getElementById("year");

let visibleYear = "2018";
let visibleItem = {};

const setvisibleItem = (item) => {
  visibleItem = item ? item : {};
  itemDetails.innerHTML = item
    ? `<p class="number">${visibleItem.id}</p>
  <p class="name">${visibleItem.name}</p>`
    : `<p class="placeholder">hover over a #!</p>`;
};

const populateItemsList = () => {
  itemsList.innerHTML = "";
  if (visibleYear === "2018") {
    btn2018.classList.add("active");
    btn2019.classList.remove("active");
  } else {
    btn2019.classList.add("active");
    btn2018.classList.remove("active");
  }

  topTenList[visibleYear].forEach((item) => {
    const itemElem = document.createElement("li");
    itemElem.innerHTML = `<p class="item">${item.id}</p>`;
    itemsList.appendChild(itemElem);
    itemElem.addEventListener("mouseover", () => setvisibleItem(item));
    itemElem.addEventListener("mouseout", () => setvisibleItem(null));
  });
  year.innerHTML = visibleYear;
};

const toggleYear = (yr) => {
  visibleYear = yr;
  populateItemsList();
};

populateItemsList();
setvisibleItem();
