import useState from 'react'
import {Modal, Button} from 'react-bootstrap'


const UserScores = ({user}) => {


    return (
        <>
                {user.map((user)=>{
                    return (
                        <div className='user-scores'>
                        <h4>Recent scores for {user.email}: </h4>
                        {user.scores <= 1 ? <h4>{user.scores}</h4> : <h4>{user.scores.sort().reverse().toString().replaceAll(',', ' || ')}</h4> }
                        </div>
                    )
                })}
        </>
    )
}

export default UserScores