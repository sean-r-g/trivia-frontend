import useState from 'react'

const UserScores = ({user, loggedIn}) => {
    return (
        <>
            {user.map((user)=>{
                return (
                    <div>
                        <h4>{user.email}'s recent scores:</h4>
                        {/* <ul>
                            {user.scores.map((score)=>{
                                <li>{user.scores.score}</li>
                            })}
                        </ul> */}
                        <h4>{user.scores.toString()}</h4>
                        {/* note to self: try using array function here */}
                    </div>
                )
            })}
        </>
    )
}

export default UserScores