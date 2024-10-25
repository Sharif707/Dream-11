// import React from 'react';

import PropTypes from "prop-types";
const SinglePlayer = ({ player, handleSelectPlayer }) => {
 
  // console.log(player);
  const { name,  image, role, battingType, bowlingType, biddingPrice } =
    player;
  return (
    <div className="p-6 rounded-2xl border border-yellow-400">
      <img
        className="w-full h-60 object-cover rounded-2xl"
        src={image}
        alt=""
      />
      <div className="flex gap-2 mt-6">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-glyphs/30/person-male.png"
          alt="person-male"
        />
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>

      <div className="my-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios/24/flag--v1.png"
            alt="flag--v1"
          />
          <p className="text-[#131313] text-opacity-60 ">India</p>
        </div>
        <p className="text-[#131313] text-opacity-60 py-2 px-4 rounded-lg bg-[#131313] bg-opacity-5">
          {role}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-medium">Rating</h3>
        <div className="flex justify-between items-center my-3">
          <h3 className="text-lg font-semibold">Batting Type:</h3>
          <p className="text-[#131313] text-opacity-60 py-2 px-4 rounded-lg bg-[#131313] bg-opacity-5">
            {battingType}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Bowling Type:</h3>
          <p className='text-[#131313] text-opacity-60 py-2 px-4 rounded-lg bg-[#131313] bg-opacity-5'>{bowlingType}</p>
        </div>
      </div>

      <div className="flex items-center justify-between my-3">
        <p>Price: ${biddingPrice}</p>
        <button onClick={() => {
          handleSelectPlayer(biddingPrice, player)
      
        }} className="text-[#131313] text-opacity-60 py-2 px-4 rounded-lg bg-[#131313] bg-opacity-5">Choose Player</button>
      </div>
    </div>
  );
};
SinglePlayer.propTypes = {
  player: PropTypes.object,
  handleSelectPlayer: PropTypes.func,
};

export default SinglePlayer;
