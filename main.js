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
let min = document.querySelector(".Min");
let max = document.querySelector(".Max");
let filter = document.querySelector(".filter");

products.forEach((item) => {
  let section = document.createElement("div");
  document.body.appendChild(section);
  section.classList.add("section");

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
