
import React, { use } from 'react';
import UserImg from '../assets/Group.png'
import FlagImg from '../assets/flag.png'
const AvailablesPlayers = ({ playerPomise }) => {
    const playerData = use(playerPomise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

            {
                playerData.map(player => <div className="card bg-gray-100 shadow-sm p-4">
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
                            <button className="btn ">Choose Player</button>
                        </div>
                    </div>
                </div>
                )
            }



        </div>
    );
};

export default AvailablesPlayers;