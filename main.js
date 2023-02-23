let products = [
  ["Apple", 2.4],
  ["Banana", 1.8],
  ["Cherry", 3],
  ["Peach", 1.2],
  ["Watermelon", 0.7],
  ["Melon", 1],
  ["Plum", 3, 2],
];

let lowHigh = document.querySelector(".but1");
let highLow = document.querySelector(".but2");
let az = document.querySelector(".but3");
let za = document.querySelector(".but4");
let min = document.querySelector(".min");
let max = document.querySelector(".max");
let filter = document.querySelector(".filter");
let section = document.createElement("section");
document.body.appendChild(section);
section.classList.add("section");

highLow.addEventListener("click", function () {
  section.innerHTML = "";
  products.sort((a, b) => b[1] - a[1]);
  products.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");
    section.appendChild(card);

    let name = document.createElement("p");
    card.appendChild(name);
    name.innerHTML = "Product Name: " + item[0];

    let price = document.createElement("p");
    card.appendChild(price);
    price.innerHTML = "Product Price: " + item[1] + "$";
  });
});

lowHigh.addEventListener("click", function () {
  section.innerHTML = "";
  products.sort((a, b) => a[1] - b[1]);
  products.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");
    section.appendChild(card);

    let name = document.createElement("p");
    card.appendChild(name);
    name.innerHTML = "Product Name: " + item[0];

    let price = document.createElement("p");
    card.appendChild(price);
    price.innerHTML = "Product Price: " + item[1] + "$";
  });
});

az.addEventListener("click", function () {
  section.innerHTML = "";
  products.sort();
  products.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");
    section.appendChild(card);

    let name = document.createElement("p");
    card.appendChild(name);
    name.innerHTML = "Product Name: " + item[0];

    let price = document.createElement("p");
    card.appendChild(price);
    price.innerHTML = "Product Price: " + item[1] + "$";
  });
});

za.addEventListener("click", function () {
  section.innerHTML = "";
  products.sort();
  products.reverse();
  products.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");
    section.appendChild(card);

    let name = document.createElement("p");
    card.appendChild(name);
    name.innerHTML = "Product Name: " + item[0];

    let price = document.createElement("p");
    card.appendChild(price);
    price.innerHTML = "Product Price: " + item[1] + "$";
  });
});

products.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("card");
  section.appendChild(card);

  let name = document.createElement("p");
  card.appendChild(name);
  name.innerHTML = "Product Name: " + item[0];

  let price = document.createElement("p");
  card.appendChild(price);
  price.innerHTML = "Product Price: " + item[1] + "$";
});

filter.addEventListener("click", function () {
  section.innerHTML = "";
  let gafiltruliArray = [];
  products.filter((product) => {
    if (product[1] > min.value && product[1] < max.value) {
      console.log(product);
      gafiltruliArray.push(product);
    }
  });

  gafiltruliArray.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");
    section.appendChild(card);

    let name = document.createElement("p");
    card.appendChild(name);
    name.innerHTML = "Product Name: " + item[0];

    let price = document.createElement("p");
    card.appendChild(price);
    price.innerHTML = "Product Price: " + item[1] + "$";
  });
});
