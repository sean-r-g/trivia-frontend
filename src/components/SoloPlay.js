import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import Fade from 'react-bootstrap/Fade'

const SoloPlay = (props) => {
  const [questions, setQuestions] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [userAnswer, setUserAnswer] = useState()
  const [showAnswer, setShowAnswer] = useState(false)
  const [checkedAnswer, setCheckedAnswer] = useState(false)
  const [userScore, setUserScore] = useState(0)
  const [key, setKey] = useState(0)
  const [showTimer, setShowTimer] = useState(false)
  const [open, setOpen] = useState(false)

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
    setShowTimer(true)
    setKey(prevKey => prevKey + 1)
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
  const handleTimerDone = () => {
    setShowAnswer(true)
    setShowTimer(false)
  }

  const checkAnswer = (event, question) => {
    setShowAnswer(true)
    setShowTimer(false)
    event.preventDefault()
    if (userAnswer.toLowerCase() == question.answer.toLowerCase()) {
      setCheckedAnswer(true)
      setUserScore(userScore + 100)
    } else {
      setCheckedAnswer(false)
    }
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
    <>
    <h1>Solo Play!</h1>
    <h2 id='score'>Score: {userScore}</h2>
    <button className='question-generator' onClick={() => {handleRandom(); setShowAll(true); setOpen(true)}} aria-controls='question-card' aria-expanded={open}>Generate Question</button>
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
    </>
  );
}

export default SoloPlay