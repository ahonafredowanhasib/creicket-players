
import React, { use } from 'react';

const AvailablesPlayers = ({playerPomise}) => {
    const playerData = use(playerPomise)
    console.log(playerData)
    return (
        <div>
            Comming soon
        </div>
    );
};

export default AvailablesPlayers;