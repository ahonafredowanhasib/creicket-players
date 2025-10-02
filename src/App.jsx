import './App.css'
import AvailablesPlayers from './components/AvailablesPlayers'
import Selectedplayers from './components/Selectedplayers'
import NavBar from './components/NavBar'
import { Suspense, useState } from 'react'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()

}

function App() {

  const [toggole, setToggole]=useState(true)


  const playerPomise = fetchPlayers()
  return (
    <>
      <NavBar></NavBar>

     <div className= 'max-w-[1200px] mx-auto flex justify-between items-center mt-[32px] mb-[32px]'>
        <h1 className='font-bold text-2xl'>Avaailable Players</h1>
        <div className='font-semibold'>

          <button onClick={()=>setToggole(true)} className={`py-3 px-5  border-1 border-gray-400 rounded-l-xl border-r-0 ${toggole === true ? "bg-[#E7FE29]":""} `}>Avaailable</button>

          <button onClick={()=>setToggole(false)} className={`py-3 px-5  border-1 border-gray-400 rounded-r-xl border-l-0 ${toggole === false ? "bg-[#E7FE29]":""} `}>Selectd <span>(0)</span></button>
        </div>
     </div>

     {
      toggole === true ? <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <AvailablesPlayers playerPomise={playerPomise}></AvailablesPlayers>
      </Suspense>  : <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
      <Selectedplayers></Selectedplayers>
      </Suspense>
     }
      
      
    </>

  )
}

export default App
