import React, { useState } from "react"
import GameBoard from "./GameBoard"
import Scoreboard from "./Scoreboard"

const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [cards, addCard] = useState([])

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1)
  }
  const handleHighScore = () => {
    if (highScore < score) {
      setHighScore(score)
    }
  }
  const handleCard = (cardName) => {
    addCard((prevCards) => [...prevCards, cardName])
  }
  const reset = () => {
    setScore(0)
    addCard([])
  }
  const handleGame = (cardName) => {
    if (!cards.includes(cardName)) {
      handleScore()
      handleCard(cardName)
    } else {
      handleHighScore()
      reset()
    }
  }

  return (
    <>
      <Scoreboard score={score} highScore={highScore} />
      <GameBoard handleGame={handleGame} />
    </>
  )
}

export default GamePlay
