import React from 'react'
import DeleteLogo from '../assets/delete.png'
const SelectedCard = ({ player, removePlayer }) => {
    const handleRemove = () => {
        removePlayer(player)
    }
    return (
        <div className='border-1 border-gray-400 rounded-xl flex justify-between items-center p-6 mt-[10px]'>
            <div className='flex gap-[10px] items-center'>
                <img className='h-[50px] w-[50px] rounded-xl' src={player.image} alt="" />
                <div>
                    <h1 className='font-bold'>{player.name}</h1>
                    <p>{player.role}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
                <img src={DeleteLogo} alt="" />
            </div>
        </div>
    )
}

export default SelectedCard
