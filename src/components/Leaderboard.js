import {useState, useEffect} from 'react'
import {Modal, Button} from 'react-bootstrap'
import axios from 'axios'


const Leaderboard = ({showLb, setShowLb, handleCloseLb, handleShowLb}) => {

    const [leaderboard, setLeaderboard] = useState([])

    const getLeaderboard = () => {
        // axios.get('http://localhost:3000/leaderboard').then((response)=>{
        axios.get('https://trivializer-backend.herokuapp.com/leaderboard').then((response)=>{
            setLeaderboard(response.data)
        })
    }


    useEffect(()=>{
        getLeaderboard()
    }, [])

    return (
        <>
         <Modal show={showLb} onHide={handleCloseLb}>
            <Modal.Header closeButton>
            <Modal.Title id='modaltitle'>Trivializer Leaderboard</Modal.Title>
            </Modal.Header>
            <Modal.Body id='modalbody'>
                <ol type='1'>
                    {leaderboard.map((leader)=>{
                        return (
                            <li>{leader.email.slice(0,3)}****.com - Score: {leader.score}</li>
                        )
                    })}
                </ol>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseLb}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

        </>
    )
}

export default Leaderboard