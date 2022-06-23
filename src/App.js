import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Timer from './components/timer'
import UrgeWithPleasureComponent from './components/yarntimer';


function App() {
  const [questions, setQuestions] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [userAnswer, setUserAnswer] = useState()
  const [showAnswer, setShowAnswer] = useState(false)
  const [checkedAnswer, setCheckedAnswer] = useState(false)
  const [userScore, setUserScore] = useState(0)

  const currentUrl = 'http://localhost:3000/trivia/'

  const getQuestions = () => {
    axios.get(currentUrl).then((response)=>{
      setQuestions(response.data)
    })
  }

  let randomid = null
  const randomSelection = () => {
    randomid = Math.floor(Math.random() * 698)
    return randomid
  }

  const handleRandom = () => {
    setShowAnswer(false)
    setUserAnswer('')
    randomSelection()
      axios.get(currentUrl + randomid).then((response)=>{
        console.log(randomid);
        setQuestions(response.data)
      })
    }
  
  const handleUserAnswer = (event) => {
    setUserAnswer(event.target.value)
  }


  const checkAnswer = (event, question) => {
    setShowAnswer(true)
    event.preventDefault()
    if (userAnswer.toLowerCase() == question.answer.toLowerCase()) {
      setCheckedAnswer(true)
      setUserScore(userScore + 100)
    } else {
      setCheckedAnswer(false)
    }
  }

  useEffect(()=>{
    getQuestions()
  },[])




  return (
    <>
    <h1>Hello World!</h1>
    <h2>Score: {userScore}</h2>
    {/* <Timer/> */}
    {showAnswer ? <UrgeWithPleasureComponent/> : null}
    <button onClick={() => {handleRandom(); setShowAll(true)}}>Generate Question</button>
    {showAll ? <div>
      {questions.map((question)=> {
        return (
          <div key={question.id}>
            <h4>Category: {question.category}</h4>
            <h4>Question: {question.question}</h4>
            <h5>Answer: {question.answer}</h5>
            <h4>{question.image}</h4>
            <form onSubmit={(event) => {checkAnswer(event, question)}}>
              <label> Answer: 
                <input type='text' name='useranswer' value={userAnswer} onChange={handleUserAnswer}></input>
                <input type='submit' value='Submit'/>
              </label>
            </form>
            {showAnswer ? checkedAnswer ? <h1>Correct!</h1> : <h1>Wrong! The correct answer is {question.answer}</h1> : null}
          </div>
        )
      })}
    </div> : null}
    </>
  );
}

export default App;
