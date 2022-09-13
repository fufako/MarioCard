import React, { useState } from "react"
import Card from "./Card"
import Mario from "../images/Mario.png"
import BabyLuigi from "../images/BabyLuigi.png"
import BabyMario from "../images/BabyMario.png"
import Bowser from "../images/Bowser.png"
import Daisy from "../images/Daisy.png"
import DKong from "../images/DKong.png"
import Koopa from "../images/Koopa.png"
import Luigi from "../images/Luigi.png"
import Peach from "../images/Peach.png"
import ShyGuy from "../images/ShyGuy.png"
import Toad from "../images/Toad.png"
import Toadette from "../images/Toadette.png"
import Waluigi from "../images/Waluigi.png"
import Wario from "../images/Wario.png"
import Yoshi from "../images/Yoshi.png"

const GameBoard = (props) => {
  const { handleGame } = props
  const images = [
    {
      src: Mario,
      name: "Mario",
      key: 1,
    },
    {
      src: BabyLuigi,
      name: "Baby Luigi",
      key: 2,
    },
    {
      src: BabyMario,
      name: "Baby Mario",
      key: 3,
    },
    {
      src: Bowser,
      name: "Bowser",
      key: 4,
    },
    {
      src: Daisy,
      name: "Daisy",
      key: 5,
    },
    {
      src: DKong,
      name: "Donkey Kong",
      key: 6,
    },
    {
      src: Koopa,
      name: "Koopa",
      key: 7,
    },
    {
      src: Luigi,
      name: "Luigi",
      key: 8,
    },
    {
      src: Peach,
      name: "Peach",
      key: 9,
    },
    {
      src: ShyGuy,
      name: "Shy Guy",
      key: 10,
    },
    {
      src: Toad,
      name: "Toad",
      key: 11,
    },
    {
      src: Toadette,
      name: "Toadette",
      key: 12,
    },
    {
      src: Waluigi,
      name: "Waluigi",
      key: 13,
    },
    {
      src: Wario,
      name: "Wario",
      key: 14,
    },
    {
      src: Yoshi,
      name: "Yoshi",
      key: 15,
    },
  ]
  const [cards, setNewCards] = useState(images)
  return (
    <div className="game-board">
      <div className="container">
        {cards.map((card) => (
          <Card
            src={card.src}
            name={card.name}
            key={card.key}
            handleGame={handleGame}
          />
        ))}
      </div>
    </div>
  )
}

export default GameBoard
