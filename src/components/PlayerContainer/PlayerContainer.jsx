import PropTypes from 'prop-types';

import Selected from '../Selected/Selected';
import Available from '../Available/Available';

const PlayerContainer = ({allplayers, isAvailable, handleIsAvailable, handleSelectPlayer, selectPlayer, handleDeleteButton }) => {
  // console.log(allplayers);
  // console.log(selectPlayer);
    return (
        <div>
              <div className="flex justify-end items-center px-3 py-4">
         
        
          <div className="space-x-2">
            <button onClick={() => {
            handleIsAvailable('isAvailable')
          }} className={`${isAvailable.isAvailable? 'bg-[#E7FE29] text-[#131313] py-3 px-5 rounded-lg' : 'py-3 px-5'}`}>Available</button>
            <button onClick={() => {
            handleIsAvailable('unavailable')
          }} className={`${isAvailable.isAvailable? 'py-3 px-5' : 'py-3 px-5 bg-[#E7FE29] text-[#131313] rounded-lg'}`}>Selected({selectPlayer.length})</button>
          </div>
  
        </div>

       
       {isAvailable.isAvailable?  <h1 className='text-2xl font-bold mb-3'>Available Players</h1> :  <h1 className='text-2xl font-bold'>Selected Players {selectPlayer.length}/6</h1>}
         {
          isAvailable.isAvailable?  <Available handleSelectPlayer={handleSelectPlayer} allplayers={allplayers} ></Available> : 
           <Selected selectPlayer={selectPlayer} handleDeleteButton={handleDeleteButton} handleIsAvailable={handleIsAvailable}></Selected>
         }
          
         
        

       
        </div>
    );
};
PlayerContainer.propTypes = {
  allplayers: PropTypes.array,
  selectPlayer: PropTypes.array,
  chosenPlayers: PropTypes.array,
  handleIsAvailable: PropTypes.func,
  handleSelectPlayer: PropTypes.func,
  handleDeleteButton: PropTypes.func,
  isAvailable: PropTypes.object.isRequired
}

export default PlayerContainer;