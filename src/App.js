import Header from "./components/Header"
import Scoreboard from "./components/Scoreboard"

function App() {
  const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="main">
      <Header />
      <Scoreboard />
    </div>
  )
}

export default App
