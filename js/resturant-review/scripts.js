const reviews = [
  {
    name: "Hama",
    review: "Good",
    rate: 3,
  },
  {
    name: "Benzi",
    review: "Amazing",
    rate: 5,
  },
  {
    name: "Ahmad",
    review: "bad",
    rate: 1,
  },
  {
    name: "SOmeone",
    review: "it wasn't as good as I expected",
    rate: 2,
  },
];

const reviewsElement = document.querySelector(".reviews");

const updatedReviews = reviews.map((review, index) => {
  return {
    ...review,
    img: "https://th.bing.com/th/id/R.5bd75f27c02ad3fc45f3c1eb47c34b0b?rik=inhVOkOZ%2fwJ%2bbQ&pid=ImgRaw&r=0&sres=1&sresct=1",
  };
});

const filteredReview = updatedReviews.filter(function (review) {
  return review.rate > 2;
});

filteredReview.forEach(reviewsLoop);

const reviewsLoop = () => {
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewsElement.appendChild(reviewElement);

  const imgElement = document.createElement("img");
  imgElement.src = review.img;
  imgElement.alt = review.name + "'s image";
  reviewElement.appendChild(imgElement);

  const contentElement = document.createElement("div");
  reviewElement.appendChild(contentElement);

  const nameElement = document.createElement("h3");
  nameElement.textContent = review.name;
  contentElement.appendChild(nameElement);

  const ratingElement = document.createElement("h4");
  ratingElement.textContent = `${review.rate} `;
  //  `
  //   4
  //   <span class="fa fa-star checked"></span>
  //   <span class="fa fa-star checked"></span>
  //   <span class="fa fa-star checked"></span>
  //   <span class="fa fa-star checked"></span>
  //   <span class="fa fa-star"></span>
  // `;
  for (let i = 0; i < 5; i++) {
    const spanElement = document.createElement("span");
    if (i < review.rate) {
      spanElement.className = "fa fa-star checked";
    } else {
      spanElement.className = "fa fa-star";
    }

    ratingElement.appendChild(spanElement);
  }

  contentElement.appendChild(ratingElement);

  const commentElement = document.createElement("p");
  commentElement.textContent = review.review;
  contentElement.appendChild(commentElement);
};

for (review of filteredReview) {
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewsElement.appendChild(reviewElement);

  const imgElement = document.createElement("img");
  imgElement.src = review.img;
  imgElement.alt = review.name + "'s image";
  reviewElement.appendChild(imgElement);

  const contentElement = document.createElement("div");
  reviewElement.appendChild(contentElement);

  const nameElement = document.createElement("h3");
  nameElement.textContent = review.name;
  contentElement.appendChild(nameElement);

  const ratingElement = document.createElement("h4");
  ratingElement.textContent = `${review.rate} `;
  //  `
  //   4
  //   <span class="fa fa-star checked"></span>
  //   <span class="fa fa-star checked"></span>
  //   <span class="fa fa-star checked"></span>
  //   <span class="fa fa-star checked"></span>
  //   <span class="fa fa-star"></span>
  // `;
  for (let i = 0; i < 5; i++) {
    const spanElement = document.createElement("span");
    if (i < review.rate) {
      spanElement.className = "fa fa-star checked";
    } else {
      spanElement.className = "fa fa-star";
    }

    ratingElement.appendChild(spanElement);
  }

  contentElement.appendChild(ratingElement);

  const commentElement = document.createElement("p");
  commentElement.textContent = review.review;
  contentElement.appendChild(commentElement);
}

// {
//   city: "sleman" or "hawler"
//  sky :
// }

let temp = 10;
let isSunny = true;
let city = "Hawler";

if (isSunny && temp <= 15) {
  console.log("bring a coat");
} else if (!isSunny && temp <= 15) {
  console.log("bring a coat and an umbrella");
} else if (temp <= 30) {
  console.log("its a nice weather");
} else {
  console.log("its hot outside");
}

switch (city.toLocaleLowerCase()) {
  case "hawler":
    console.log("welcome to hawler");
    break;
  case "slemany":
    console.log("welcome to slemany");
    break;
  default:
    console.log("this city isn;t registered");
}

let sentence =
  city === "hawler" && isSunny ? "It's sunny today" : "It's cloudy";

console.log(sentence);
