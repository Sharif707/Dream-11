import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import PlayerContainer from "./components/PlayerContainer/PlayerContainer";
import { toast } from "react-toastify";
import SinglePlayer from "./components/SinglePlayer/SinglePlayer";

function App() {
  const [allplayers, setAllPlayers] = useState([]);
  const notify = () => toast.success("You have succesfully added");
  const notify2 = () => toast.error("You don't have enough coins");
  const notify3 = () => toast.error("Selection limit reached");
  const notify4 = () => toast.error("Player Deleted Succesfully");
  const notify5 = () => toast.error("Already Exists");

  useEffect(() => {
    fetch("fake-data.json")
      .then((response) => response.json())
      .then((data) => setAllPlayers(data.players));
  }, []);

  const [isAvailable, setisAvailable] = useState({
    isAvailable: true,
    status: "isAvailable",
  });

  const [coin, setCoin] = useState(0);
  const handleCoin = () => {
    const newCoin = coin + 5000000;
    setCoin(newCoin);
  };

  const [selectPlayer, setSelectPlayer] = useState([]);
  const handleSelectPlayer = (selectedPlayer) => {
    const { biddingPrice } = selectedPlayer;
    console.log(selectedPlayer);
    const isExist = selectPlayer.find(
      (p) => p.playerId == selectedPlayer.playerId
    );
    if (isExist) {
      notify5();
    } else if (coin < biddingPrice) {
      notify2()
    } else if (selectPlayer.length == 6) {
      notify3();
    } else {
      const updatedChosenPlayer = [...selectPlayer, selectedPlayer];
      setSelectPlayer(updatedChosenPlayer);
      const updatedCoin = coin - biddingPrice;
      setCoin(updatedCoin);
      notify();
    }
  };

 

  const handleDeleteButton = (id) => {
    const newArr = selectPlayer.find((player) => player.playerId == id)
   const biddingprice = newArr.biddingPrice
   setCoin(coin + biddingprice)
  
    const removeChosenPlayers = selectPlayer.filter((p) => p.playerId !== id);
    setSelectPlayer(removeChosenPlayers);
    
  };

  const handleIsAvailable = (status) => {
    if (status === "isAvailable") {
      setisAvailable({
        isAvailable: true,
        status: "isAvailable",
      });
    } else {
      setisAvailable({
        isAvailable: false,
        status: "unavailable",
      });
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar coin={coin}></Navbar>
        <Banner handleCoin={handleCoin}></Banner>

        <PlayerContainer
          handleSelectPlayer={handleSelectPlayer}
          isAvailable={isAvailable}
          handleIsAvailable={handleIsAvailable}
          handleDeleteButton={handleDeleteButton}
          allplayers={allplayers}
          selectPlayer={selectPlayer}
        ></PlayerContainer>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
