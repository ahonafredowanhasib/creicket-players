import './App.css'
import AvailablesPlayers from './components/AvailablesPlayers'
import Selectedplayers from './components/Selectedplayers'
import NavBar from './components/NavBar'
import { Suspense } from 'react'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()

}

function App() {
 const playerPomise = fetchPlayers()
  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <AvailablesPlayers playerPomise={playerPomise}></AvailablesPlayers>
      </Suspense>
      {/* <Selectedplayers></Selectedplayers> */}
    </>

  )
}

export default App
