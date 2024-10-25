import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";
import PlayerContainer from "./components/PlayerContainer/PlayerContainer";

function App() {
  const [allplayers, setAllPlayers] = useState([]);
  const [isAvailable, setisAvailable] = useState({
    isAvailable: true,
    status: "isAvailable",
  });

  const handleIsAvailable = (status) => {
    if(status === 'isAvailable'){
      setisAvailable({
        isAvailable: true,
        status: "isAvailable",
      })
    }
    else {
      setisAvailable({
        isAvailable: false,
        status: "unavailable",
      })
    }
  };

  useEffect(() => {
    fetch("fake-data.json")
      .then((response) => response.json())
      .then((data) => setAllPlayers(data.players));
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>

        <PlayerContainer isAvailable={isAvailable}
          handleIsAvailable={handleIsAvailable}
          allplayers={allplayers}
        ></PlayerContainer>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
