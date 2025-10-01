import './App.css'
import AvailablesPlayers from './components/AvailablesPlayers'
import Selectedplayers from './components/Selectedplayers'
import NavBar from './components/NavBar'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()

}

function App() {

  return (
    <>
      <NavBar></NavBar>
      <AvailablesPlayers fetchPlayers={fetchPlayers}></AvailablesPlayers>
      {/* <Selectedplayers></Selectedplayers> */}
    </>

  )
}

export default App
