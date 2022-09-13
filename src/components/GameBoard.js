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
    },
    {
      src: BabyLuigi,
      name: "Baby Luigi",
    },
    {
      src: BabyMario,
      name: "Baby Mario",
    },
    {
      src: Bowser,
      name: "Bowser",
    },
    {
      src: Daisy,
      name: "Daisy",
    },
    {
      src: DKong,
      name: "Donkey Kong",
    },
    {
      src: Koopa,
      name: "Koopa",
    },
    {
      src: Luigi,
      name: "Luigi",
    },
    {
      src: Peach,
      name: "Peach",
    },
    {
      src: ShyGuy,
      name: "Shy Guy",
    },
    {
      src: Toad,
      name: "Toad",
    },
    {
      src: Toadette,
      name: "Toadette",
    },
    {
      src: Waluigi,
      name: "Waluigi",
    },
    {
      src: Wario,
      name: "Wario",
    },
    {
      src: Yoshi,
      name: "Yoshi",
    },
  ]
  const [cards, setNewCards] = useState(images)
  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card src={card.src} name={card.name} handleGameLogic={handleGame} />
      ))}
    </div>
  )
}

export default GameBoard
