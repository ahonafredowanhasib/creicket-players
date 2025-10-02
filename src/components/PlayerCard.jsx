import React, { useState } from 'react'
import UserImg from '../assets/Group.png'
import FlagImg from '../assets/flag.png'
const playerCard = ({ player, setAvailableBalance, availableBalance }) => {

    const [isSelected, setIsSelected] = useState(false)

    return (

        <div className="card bg-gray-100 shadow-sm p-4">
            <figure>
                <img
                    className='mdw-full h-[200px] md:h-[350px] md:object-cover rounded-xl'
                    src={player.image}
                    alt="Player" />
            </figure>
            <div className="mt-[15px]">
                <div className='flex gap-[10px]'>
                    <img src={UserImg} alt="" />
                    <h2 className="card-title">{player.name}</h2>
                </div>
                <div className='flex justify-between mt-[10px] border-b-1 border-gray-400 pb-2'>
                    <div className='flex gap-[6px] items-center'>
                        <img className='w-[20px] h-[20px]' src={FlagImg} alt="" />
                        <span>{player.country}</span>
                    </div>
                    <button className='btn'>{player.role}</button>
                </div>

                <div className='flex justify-between font-semibold mt-[5px]'>
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>

                <div className='flex justify-between '>
                    <span className='font-semibold mt-[5px]'>{player.batingStyle}</span>
                    <span>{player.bowlingStyle}</span>
                </div>
                <div className="card-actions mt-3 flex justify-between items-center">
                    <p className='font-semibold'>Price: {player.price}</p>

                    <button disabled={isSelected} onClick={() => {
                        const playerPrice = parseInt(player.price.split("$").join(""))
                        if (availableBalance < playerPrice){
                            alert("You have not enough coins !!!")
                        }
                        else{
                            
                            setIsSelected(true)

                            setAvailableBalance(availableBalance - playerPrice)
                        }
                           

                    }} className="btn ">{isSelected === true ? "Selected" : "Choose Player"}</button>
                </div>
            </div>
        </div>
    )
}

export default playerCard
