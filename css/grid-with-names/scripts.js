const cards = [
  "Evan Rachel Wood",
  "Tessa Thompson",
  "Jeffrey Wright",
  "Ed Harris",
];

const container = document.querySelector("#main");

cards.forEach((card, index) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card" + (index + 1));

  // cardElement.innerHTML = `<h3>${card.title}</h3><p>${card.desc}</p>`;

  const titleElement = document.createElement("h3");
  titleElement.textContent = card;

  cardElement.appendChild(titleElement);

  container.appendChild(cardElement);
});
