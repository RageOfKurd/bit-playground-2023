const questions = [
  {
    question: "What is the scientific name of a butterfly?",
    answers: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
    correct: "Rhopalocera",
  },
  {
    question: "How hot is the surface of the sun?",
    answers: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
    correct: "5,778 K",
  },
  {
    question: "Who are the actors in The Internship?",
    answers: [
      "Ben Stiller, Jonah Hill",
      "Courteney Cox, Matt LeBlanc",
      "Kaley Cuoco, Jim Parsons",
      "Vince Vaughn, Owen Wilson",
    ],
    correct: "Vince Vaughn, Owen Wilson",
  },
  {
    question: "What is the capital of Spain?",
    answers: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
    correct: "Madrid",
  },
  {
    question:
      "What are the school colors of the University of Texas at Austin?",
    answers: [
      "Black, Red",
      "Blue, Orange",
      "White, Burnt Orange",
      "White, Old gold, Gold",
    ],
    correct: "White, Burnt Orange",
  },
  {
    question: "What is 70 degrees Fahrenheit in Celsius?",
    answers: ["18.8889", "20", "21.1111", "158"],
    correct: "21.1111",
  },
  {
    question: "When was Mahatma Gandhi born?",
    answers: [
      "October 2, 1869",
      "December 15, 1872",
      "July 18, 1918",
      "January 15, 1929",
    ],
    correct: "October 2, 1869",
  },
  {
    question: "How far is the moon from Earth?",
    answers: [
      "7,918 miles (12,742 km)",
      "86,881 miles (139,822 km)",
      "238,400 miles (384,400 km)",
      "35,980,000 miles (57,910,000 km)",
    ],
    correct: "238,400 miles (384,400 km)",
  },
  {
    question: "What is 65 times 52?",
    answers: ["117", "3120", "3380", "3520"],
    correct: "3380",
  },
  {
    question: "How tall is Mount Everest?",
    answers: [
      "6,683 ft (2,037 m)",
      "7,918 ft (2,413 m)",
      "19,341 ft (5,895 m)",
      "29,029 ft (8,847 m)",
    ],
    correct: "29,029 ft (8,847 m)",
  },
  {
    question: "When did The Avengers come out?",
    answers: ["May 2, 2008", "May 4, 2012", "May 3, 2013", "April 4, 2014"],
    correct: "May 4, 2012",
  },
  {
    question: "What is 48,879 in hexidecimal?",
    answers: ["0x18C1", "0xBEEF", "0xDEAD", "0x12D591"],
    correct: "0xBEEF",
  },
];

const questionNumber = document.querySelector("#question-number");
const question = document.querySelector("#question");
const answers = document.querySelector("#answers");

let counter = 1;
let correctAnswers = 0;

function makeQuestion() {
  questionNumber.textContent = `Question ${counter}`;
  question.textContent = questions[counter - 1].question;

  questions[counter - 1].answers.forEach(function (answer) {
    const button = document.createElement("button");
    button.innerText = answer;
    if (answer === questions[counter - 1].correct) {
      button.dataset.correct = "true";
    }
    button.addEventListener("click", selectAnswer);
    answers.appendChild(button);
  });
}

makeQuestion();

function selectAnswer(event) {
  counter++;
  answers.innerHTML = "";

  makeQuestion();

  const isCorrect = event.target.dataset.correct;
  if (isCorrect) {
    correctAnswers++;
  }
}
