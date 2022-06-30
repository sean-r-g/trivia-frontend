import {CountdownCircleTimer} from 'react-countdown-circle-timer'


const Timer = ({key, handleTimerDone}) => {
    return (
    <CountdownCircleTimer
        key={key}
        isPlaying
        duration={25}
        size={70}
        colors={['#004777', '#F7B801', '#c95f22', '#A30000']}
        colorsTime={[15, 10, 5, 0]}
        onComplete={handleTimerDone}
        >
        {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
)
}

export default Timer