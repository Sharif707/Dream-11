import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import PropTypes from 'prop-types';

const Available = ({allplayers, handleSelectPlayer}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-60">
           {
            allplayers.map((player) => <SinglePlayer handleSelectPlayer={handleSelectPlayer} player={player} key={player.playerId}></SinglePlayer>)
          }
        </div>
    );
   
};
Available.propTypes = {
    allplayers: PropTypes.array,
    handleSelectPlayer: PropTypes.func,
    
   
  }

export default Available;