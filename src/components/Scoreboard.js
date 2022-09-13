const Scoreboard = (props) => {
  const { score, highScore } = props
  return (
    <div className="scoreboard">
      <div className="current">Current score: {score}</div>
      <div className="best">Best score: {highScore}</div>
    </div>
  )
}

export default Scoreboard
