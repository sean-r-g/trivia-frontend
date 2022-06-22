import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'


function App() {
  const [questions, setQuestions] = useState([])

  const currentUrl = 'http://localhost:3000/trivia/'

  const getQuestions = () => {
    axios.get(currentUrl).then((response)=>{
      setQuestions(response.data)
    })
  }

  const randomSelection = () => {
    return Math.floor(Math.random() * questions.length)
  }

  const handleRandom = (questionId) => {
    questionId = randomSelection()
    if (questionId == 0) {
      randomSelection()
    } else {
    //   console.log(questionId)
    //   setQuestions(questions.filter(question => question.id == questionId))
    // }
      axios.get(currentUrl + questionId).then((response)=>{
        setQuestions(response.data)
      })
    }
  }

  useEffect(()=>{
    getQuestions()
  },[])




  return (
    <>
    <h1>Hello World!</h1>
    <button onClick={handleRandom}>Generate Question</button>
    <div>
      {questions.map((question)=> {
        return (
          <div key={question.id}>
            <h4>Category: {question.category}</h4>
            <h4>Question: {question.question}</h4>
            <h4>Answer: {question.answer}</h4>
            <h4>{question.image}</h4>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default App;
