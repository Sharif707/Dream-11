import PropTypes from 'prop-types';

const Selected = ({selectPlayer, allplayers}) => {
    console.log(allplayers);
    return (
        <div className='mb-60'>
            <h1>selected component</h1>
        </div>
    );
};
Selected.propTypes = {
   selectPlayer: PropTypes.array,
   allplayers: PropTypes.array,
    
  }

export default Selected;