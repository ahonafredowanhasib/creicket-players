import './App.css'
import { ToastContainer } from 'react-toastify';
import AvailablesPlayers from './components/AvailablesPlayers'
import Selectedplayers from './components/Selectedplayers'
import NavBar from './components/NavBar'
import { Suspense, useState } from 'react'




const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()

}

const playerPomise = fetchPlayers()

function App() {

  const [toggole, setToggole] = useState(true)

  const [availableBalance, setAvailableBalance] = useState(60000000)

  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(ply => ply.name !== p.name)
    console.log(filteredData)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance + parseInt(p.price.split("$").join("")))
  }

  return (
    <>
      <NavBar availableBalance={availableBalance}></NavBar>

      <div className='max-w-[1200px] mx-auto flex justify-between items-center mt-[32px] mb-[32px]'>
        <h1 className='font-bold text-2xl'>
          {
            toggole === true ? "Available Players" : `Selected Player (${purchasedPlayers.length}/6)`
          }
        </h1>
        <div className='font-semibold'>

          <button onClick={() => setToggole(true)} className={`py-3 px-5  border-1 border-gray-400 rounded-l-xl border-r-0 ${toggole === true ? "bg-[#E7FE29]" : ""} `}>Available</button>

          <button onClick={() => setToggole(false)} className={`py-3 px-5  border-1 border-gray-400 rounded-r-xl border-l-0 ${toggole === false ? "bg-[#E7FE29]" : ""} `}>Selectd <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>

      {
        toggole === true ? <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <AvailablesPlayers

            purchasedPlayers={purchasedPlayers}

            setPurchasedPlayers={setPurchasedPlayers}

            setAvailableBalance={setAvailableBalance}

            availableBalance={availableBalance}

            playerPomise={playerPomise}></AvailablesPlayers>
        </Suspense> : <Selectedplayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}></Selectedplayers>
      }

      <ToastContainer></ToastContainer>
    </>

  )
}

export default App
