import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import Fade from 'react-bootstrap/Fade'


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
  const [rounds, setRounds ] = useState(10)

  const currentUrl = 'http://localhost:3000/trivia/'


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
    setShowTimer(true)
    setKey(prevKey => prevKey + 1)
    setShowAnswer(false)
    randomSelection()
      axios.get(currentUrl + randomid).then((response)=>{
        setQuestions(response.data)
      })
    setUserAnswer('')
    }
  
  const startGame = () => {
    setUserScore(0)
    setRounds(10)
    handleRandom()
    setShowAll(true)
    setOpen(true)
  }
  
  const handleTimerDone = () => {
    setShowAnswer(true)
    setShowTimer(false)
  }

  const checkAnswer = (event, question) => {
    setRounds(rounds - 1)
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
      handleRandom()
     if (rounds == 1) {
      alert(`Game Over! Final score: ${userScore}`)
      setRounds(10)
    }
  }

  let userEmail = email

  const handleSaveScore = (email, score) => {
    score = userScore
    email = userEmail
    axios.put(`http://localhost:3000/users/update`, {email, score})
  }

  const UrgeWithPleasureComponent = (key, props) => (
    
    <CountdownCircleTimer
      key={key}
      isPlaying
      duration={35}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[25, 15, 10, 5]}
      onComplete={handleTimerDone}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  )




  return (
    <div className='main-div'>
    <h1>Solo Play!</h1>
    <h2 id='score'>Score: {userScore}</h2>
    <h4 id='round'>Round {rounds} of 10</h4>
    <button className='question-generator' onClick={startGame} aria-controls='question-card' aria-expanded={open}>Start Game</button>
    {showAll ? <div className='questions-cont'>
      {questions.map((question)=> {
        return (
        <Fade in={open}>
          <div className='question-card'key={question.id} transition={Fade}>
            <h3>Category: {question.category}</h3>
            <h2>{question.question}</h2>
            <h5>Answer: {question.answer}</h5>
            <img src={question.image}/>
            <form onSubmit={(event) => {checkAnswer(event, question)}}>
              <label> Answer: 
                <input type='text' name='useranswer' value={userAnswer} onChange={handleUserAnswer}></input>
                <input type='submit' value='Submit'/>
              </label>
            </form>
            {showAnswer ? checkedAnswer ? <h1>Correct!</h1> : <h1>*Bzzzzzzz* The correct answer is {question.answer}</h1> : null}
          </div>
          </Fade>
        )
      })}
    </div> : null}
    {showTimer ? <div id='timer-div'><UrgeWithPleasureComponent key={key}/></div> : null}
    {loggedIn ? <button onClick={handleSaveScore} >Save Score</button> : null}
    </div>
  );
}

export default SoloPlay