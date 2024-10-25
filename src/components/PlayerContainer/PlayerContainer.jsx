import PropTypes from 'prop-types';

import Selected from '../Selected/Selected';
import Available from '../Available/Available';

const PlayerContainer = ({allplayers, isAvailable, handleIsAvailable, handleSelectPlayer, selectPlayer }) => {
  // console.log(allplayers);
  // console.log(selectPlayer);
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
          }} className={`${isAvailable.isAvailable? 'py-3 px-5' : 'py-3 px-5 bg-[#E7FE29] text-[#131313] rounded-lg'}`}>Selected({selectPlayer.length})</button>
          </div>
  
        </div>

        
         {
          isAvailable.isAvailable?  <Available handleSelectPlayer={handleSelectPlayer} allplayers={allplayers}></Available> :  <Selected selectPlayer={selectPlayer}></Selected>
         }
          
         
        

       
        </div>
    );
};
PlayerContainer.propTypes = {
  allplayers: PropTypes.array,
  selectPlayer: PropTypes.array,
  handleIsAvailable: PropTypes.func,
  handleSelectPlayer: PropTypes.func,
  isAvailable: PropTypes.object.isRequired
}

export default PlayerContainer;