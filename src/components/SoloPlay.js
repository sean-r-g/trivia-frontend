import axios from 'axios'
import React, {useState, useEffect, useRef} from 'react'
import Fade from 'react-bootstrap/Fade'
import Timer from './timer'


const SoloPlay = ({props, loggedIn, email}) => {
  const [questions, setQuestions] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [userAnswer, setUserAnswer] = useState()
  const [showAnswer, setShowAnswer] = useState(false)
  const [checkedAnswer, setCheckedAnswer] = useState(false)
  const [userScore, setUserScore] = useState(0)
  const [key, setKey] = useState(0)
  const [showTimer, setShowTimer] = useState(false)
  const [open, setOpen] = useState(false)
  const [rounds, setRounds ] = useState(1)
  const [gameOn, setGameOn] = useState(false)
  const [showForm, setShowForm] = useState(false)

  // const currentUrl = 'http://localhost:3000/trivia/'
  const currentUrl = 'https://trivializer-backend.herokuapp.com/trivia/'
  

  let randomid = null
  const randomSelection = () => {
    randomid = Math.floor(Math.random() * 698)
    return randomid
  }

  const handleUserAnswer = (event) => {
    event.preventDefault()
    setUserAnswer(event.target.value)
  }


  const handleRandom = () => {
    setShowForm(true)
    setShowTimer(true)
    setKey(prevKey => prevKey + 1)
    setShowAnswer(false)
    setCheckedAnswer(false)
    randomSelection()
      axios.get(currentUrl + randomid).then((response)=>{
        setQuestions(response.data)
      })
    setUserAnswer('')
    if (rounds == 10) {
      alert(`Game Over! Final score: ${userScore}`)
      setRounds(1)
      setGameOn(false)
      setShowTimer(false)
      if (loggedIn == true) {
        handleSaveScore()
      }
    }
  }
  
  const startGame = () => {
    setGameOn(true)
    setUserScore(0)
    setRounds(1)
    handleRandom()
    setShowAll(true)
    setOpen(true)
  }
  
  const handleTimerDone = () => {
    setShowAnswer(true)
    setShowTimer(false)
    if (rounds == 10) {
      alert(`Game Over! Final score: ${userScore}`)
      setRounds(1)
      setGameOn(false)
      if (loggedIn == true) {
        handleSaveScore()
      }
  }
}

  const checkAnswer = (event, question) => {
    setShowForm(false)
    setShowTimer(false)
    event.preventDefault()
      if (userAnswer.toLowerCase() == question.answer.toLowerCase()) {
        setShowAnswer(true)
        setCheckedAnswer(true)
        setUserScore(userScore + 100)
      } else {
        setShowAnswer(true)
        setCheckedAnswer(false)
      }
     if (rounds == 10) {
      alert(`Game Over! Final score: ${userScore}`)
      setRounds(1)
      setGameOn(false)
      if (loggedIn == true) {
        handleSaveScore()
      }
    }
  }


  let userEmail = email

  const handleSaveScore = (email, score) => {
    score = userScore
    email = userEmail
    // axios.put(`http://localhost:3000/users/update`, {email, score})
    // axios.post(`http://localhost:3000/leaderboard`, {email, score})
    axios.put(`https://trivializer-backend.herokuapp.com/users/update`, {email, score})
    axios.post(`https://trivializer-backend.herokuapp.com/leaderboard`, {email, score})
  }



  return (
    <div className='main-div'>
    <div className='round-info'> 
      <h1>Solo Play!</h1>
      <h2 id='score'>Score: {userScore}</h2>
      <h3 id='round'>Round {rounds} of 10</h3>
    </div>
    {showTimer ? <div id='timer-div'><Timer handleTimerDone={handleTimerDone} key={key}/></div> : null}
    {gameOn ? showAll ? <div className='questions-cont'>
      {questions.map((question)=> {
        return (
        <Fade in={open}>
          <div className='question-card' key={question.id} transition={Fade}>
            <h3>Category: {question.category}</h3>
            <h2>{question.question}</h2>
            {/* <h5>Answer: {question.answer}</h5> */}
            <img src={question.image}/>
            {showForm ? <form onSubmit={(event) => {checkAnswer(event, question)}}>
              <label> Answer: 
                <input type='text' name='useranswer' value={userAnswer} onChange={handleUserAnswer}></input>
                <input type='submit' value='Submit'/>
              </label>
            </form> : <h4>Your answer: {userAnswer}</h4>}
            {showAnswer ? checkedAnswer ? <h1 id='correct'>Correct!</h1> : <h1 id='wrong'>*Bzzzzzzz* Correct Answer: <span id='answer'>{question.answer}</span></h1> : null}
          </div>
          </Fade>
        )
      })}
    </div> : null : null}
    {!gameOn ? <button className='question-generator' onClick={() => {startGame()}} aria-controls='question-card' aria-expanded={open}>Start Game</button> : <button className='question-generator' onClick={() => {handleRandom(); setRounds(rounds + 1)}}>Next Question</button>}
    </div>
  );
}

export default SoloPlay