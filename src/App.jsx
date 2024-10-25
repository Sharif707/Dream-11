import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import PlayerContainer from "./components/PlayerContainer/PlayerContainer";
import { toast } from "react-toastify";

function App() {
  const [allplayers, setAllPlayers] = useState([]);
  const notify = () => toast.success("You have succesfully added");
  const notify2 = () => toast.error("You don't have enough coins");
  const notify3 = () => toast.error("Selection limit reached");

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
    const newCoin = coin + 1000000;
    setCoin(newCoin);
    console.log("it worked");
  };

  const [chosenPlayers, setChosenPlayers] = useState([])
  const handleChosenPlayers = (selectedPlayer) => {
    setChosenPlayers(...chosenPlayers, selectedPlayer)
  }

  const [selectPlayer, setSelectPlayer] = useState([]);
  const handleSelectPlayer = (Playerprice, player) => {
    if (coin > 0 && coin >= Playerprice) {
      const updatedCoin = coin - Playerprice
      setCoin(updatedCoin)
      
      
      if(selectPlayer.length < 6){
        const updatedSelection = [...selectPlayer, player ]
        setSelectPlayer(updatedSelection)
        notify();
        handleChosenPlayers(player.name)
      }
      else{
        notify3()

      }
       
     
    } else {
      notify2();
    }
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
          allplayers={allplayers}
          selectPlayer={selectPlayer}
        ></PlayerContainer>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
