

import "./App.css";
import { useState, useEffect } from 'react'
import Options from './components/Options'




function App() {

  const [questions, setQuestions] = useState(); 
  const [count, setCount] = useState(0); 
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isFinished , setIsFinished] = useState(false)
  
  function fetchQuestions() {
      fetch('https://the-trivia-api.com/api/questions/')
      .then(response => response.json())
      .then(data => setQuestions(data))
    
  }

  function handleClick(answer) {

    if (count === questions.length-1) {
      setIsFinished(true)
    }
    
    if (count <= questions.length-1 ) {
      if (answer === questions[count].correctAnswer)
    {
      setCorrectAnswers((prevValue) => prevValue + 1)
      console.log("correct",answer);
      
    }
    else {
      console.log("wrong", answer);
    }
    
    setCount((count)=>count+1)
    
    } 
    
    
  }



useEffect(() => {

  return ()=>{
    fetchQuestions();

  }
}, [])


  
  if (!questions)
  {
    return <div>loading...</div>
  }
  else {
    return (
      <div className="container">
        {isFinished && <div><h1>Welldone</h1> <p>you have {correctAnswers } correct answeres!</p></div>}
        {!isFinished && <div className="quiz-card">
          <h1 className="question-number" >{ count+1 }</h1>
          <h2 className="question" >{ questions[count].question}</h2>
          <Options handleClick={handleClick} options={questions[count].incorrectAnswers.concat(questions[count].correctAnswer)} />
        </div>}
      </div>
    );
  }
  
}
export default App;
