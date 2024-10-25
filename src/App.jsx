

import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

import Navbar from './components/Navbar/Navbar'
import PlayerContainer from './components/PlayerContainer/PlayerContainer'

function App() {
 

  return (
    <>
    <div className='max-w-screen-xl mx-auto'>
    
 <Navbar></Navbar>
   <Banner></Banner>

   <PlayerContainer></PlayerContainer>
   
      
   </div>
   <Footer></Footer>
   </>
  )
}

export default App
