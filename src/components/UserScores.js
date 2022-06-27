import useState from 'react'
import {Modal, Button} from 'react-bootstrap'


const UserScores = ({user, loggedIn, handleShowScores, handleCloseScores, showScores}) => {


    return (
        <>
                {user.map((user)=>{
                    return (
                        <div className='user-scores'>
                            <h4>Recent scores for {user.email}: </h4>
                            {/* <ul>
                                {user.scores.map((score)=>{
                                    <li>{user.scores.score}</li>
                                })}
                            </ul> */}
                            <h4>{user.scores.sort().reverse().toString().replaceAll(',', ' || ')}</h4>
                            {/* note to self: try using array function here */}
                        </div>
                    )
                })}
        </>
    )
}

export default UserScores