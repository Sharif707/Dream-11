import PropTypes from "prop-types";

const Selected = ({ selectPlayer, handleDeleteButton, handleIsAvailable }) => {
  return (
    <div className="mb-60">
      {selectPlayer.map((selectPlayer, idx) => {
        const { image, biddingPrice, name, role, playerId } = selectPlayer;

        return (
          <div key={idx}>
            <div className="flex justify-between border py-2 px-4 rounded-lg items-center mb-4">
              <div className="flex gap-3 items-center">
                <img
                  className="w-24 h-20 object-cover rounded-lg"
                  src={image}
                  alt="player-photo"
                />
                <div>
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <p>{role}</p>
                  <p className="text-[#131313] text-opacity-60">
                    ${biddingPrice}
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    handleDeleteButton(playerId);
                  }}
                >
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/fluency-systems-regular/50/filled-trash.png"
                    alt="filled-trash"
                  />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {selectPlayer.length ? (
        <button
          className="py-3 px-5 bg-[#E7FE29] text-[#131313] rounded-lg"
          onClick={() => {
            handleIsAvailable("isAvailable");
          }}
        >
          Add More Player
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
Selected.propTypes = {
  selectPlayer: PropTypes.array,
  allplayers: PropTypes.array,

  handleDeleteButton: PropTypes.func,
};

export default Selected;
