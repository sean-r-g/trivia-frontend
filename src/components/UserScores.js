import useState from 'react'
import {Modal, Button} from 'react-bootstrap'


const UserScores = ({user}) => {


    return (
        <>
                {user.map((thisUser)=>{
                    return (
                        <div className='user-scores' key={user.id}>
                            <h4>Recent scores for {thisUser.email}: </h4>
                            {/* {thisUser.scores <= 1 ? <h4>{thisUser.scores}</h4> : <h4>{thisUser.scores.sort().reverse().toString().replaceAll(',', ' || ')}</h4> } */}
                            <ul>
                               {thisUser.scores.sort().reverse().map((score)=>{
                                   return (
                                   <li>{score}</li>
                                   )
                               })} 
                            </ul>
                        </div>
                    )
                })}
        </>
    )
}

export default UserScores