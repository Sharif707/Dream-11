import PropTypes from 'prop-types';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const PlayerContainer = ({allplayers, isAvailable, handleIsAvailable }) => {
  // console.log(allplayers);
    return (
        <div>
              <div className="flex justify-between items-center px-3 py-4">
          <h1>Available</h1>
        
          <div className="space-x-2">
            <button onClick={() => {
            handleIsAvailable('isAvailable')
          }} className={`${isAvailable.isAvailable? 'bg-[#E7FE29] text-[#131313] py-3 px-5 rounded-lg' : 'py-3 px-5'}`}>Available</button>
            <button onClick={() => {
            handleIsAvailable('unavailable')
          }} className={`${isAvailable.isAvailable? 'py-3 px-5' : 'py-3 px-5 bg-[#E7FE29] text-[#131313] rounded-lg'}`}>Selected</button>
          </div>
  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-60">
          {
            allplayers.map((player) => <SinglePlayer player={player} key={player.playerId}></SinglePlayer>)
          }

        </div>
        </div>
    );
};
PlayerContainer.propTypes = {
  allplayers: PropTypes.array,
  handleIsAvailable: PropTypes.func,
  isAvailable: PropTypes.object.isRequired
}

export default PlayerContainer;