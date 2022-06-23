import {useEffect, useState} from 'react'

const Timer = (props) => {
    const [seconds, setSeconds] = useState()

    const handleReset = () => {
        setSeconds(20)
    }

    useEffect(()=> {
        let myInterval = setInterval(()=> {
        if (seconds > 0) {
                setSeconds(seconds - 1)
        } else if (seconds == 0) {
            setSeconds(0)
            }
        }, 1000)
    })

    return (
        <div>
            {seconds == 0 ? null : <h1>{seconds}</h1>}
            <button onClick={handleReset}>Reset</button>
        </div>
    )

}

export default Timer