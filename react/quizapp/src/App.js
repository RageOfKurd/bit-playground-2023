import { useState } from "react";
import "./App.css";

function App() {
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
