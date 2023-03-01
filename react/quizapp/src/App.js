import { useState } from "react";
import "./App.css";

//https://the-trivia-api.com/api/questions/

/*
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
*/

function App() {
  console.log("hello");
  return (
    <div className="container">
      <div className="quiz-card">
        <h1 className="question-number" id="question-number"></h1>
        <h2 className="question" id="question"></h2>
        <div id="answers" className="answers"></div>
      </div>
    </div>
  );
}

export default App;
