import {CountdownCircleTimer} from 'react-countdown-circle-timer'


const Timer = ({key, handleTimerDone}) => {
    return (
    <CountdownCircleTimer
        key={key}
        isPlaying
        duration={25}
        size={70}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[20, 15, 10, 5]}
        onComplete={handleTimerDone}
        >
        {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
)
}

export default Timer