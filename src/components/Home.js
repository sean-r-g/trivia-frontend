const Home = ({handleShowSolo, handleShowLb}) => {
    return (
        <>
            <div className='intro-div'>
                 <h1>Play. Win. Compete.</h1>
            <div className='intro-btns'>
                <button onClick={handleShowSolo}>Solo Play</button>
                <button onClick={handleShowLb}>Leaderboard</button>
            </div>
            <div className="intro-btns">
                <button id='mp-btn'>Multiplayer <span id='indev'>(in development)</span></button>
            </div>
            </div>
        </>
    )
}

export default Home