import { useState } from "react";
import "./App.css";

//https://the-trivia-api.com/api/questions/

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
