
import React, { use } from 'react';
import PlayerCard from './PlayerCard'

const AvailablesPlayers = ({playerPomise,setAvailableBalance,availableBalance}) => {
    const playerData = use(playerPomise)
    console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

            {
                playerData.map(player => <PlayerCard 
                    availableBalance={availableBalance}
                    setAvailableBalance={setAvailableBalance} player={player} key={player.name}></PlayerCard> )
                
            }

        </div>
    );
};

export default AvailablesPlayers;