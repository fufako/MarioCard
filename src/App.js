import Header from "./components/Header"
import Scoreboard from "./components/Scoreboard"
import GameBoard from "./components/GameBoard"

function App() {
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="main">
      <Header />
      <Scoreboard />
      <GameBoard />
    </div>
  )
}

export default App
