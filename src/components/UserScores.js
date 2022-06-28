import useState from 'react'
import {Modal, Button} from 'react-bootstrap'


const UserScores = ({user, showScores, handleCloseScores, handleShowScores}) => {


    return (
        <>
        {/* <p id='loginmodal' variant="primary" onClick={handleShowScores}>
            Scores
          </p> */}
          <Modal show={showScores} onHide={handleCloseScores}>
            <Modal.Header closeButton>
            <Modal.Title id='modaltitle'>My Scores</Modal.Title>
            </Modal.Header>
            <Modal.Body id='modalbody'>
            {user.map((thisUser)=>{
                    return (
                        <div className='user-scores' key={user.id}>
                            <h4>Recent scores for {thisUser.email}: </h4>
                            {/* {thisUser.scores <= 1 ? <h4>{thisUser.scores}</h4> : <h4>{thisUser.scores.sort().reverse().toString().replaceAll(',', ' || ')}</h4> } */}
                            {thisUser.scores <= 1 ? <h4>{thisUser.scores}</h4> : <ul>
                               {thisUser.scores.sort().reverse().map((score)=>{
                                   return (
                                   <li>{score}</li>
                                   )
                               })} 
                            </ul>}
                        </div>
                    )
                })}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseScores}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

        </>
    )
}

export default UserScores