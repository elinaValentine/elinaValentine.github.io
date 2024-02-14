import React, { useState, useEffect, useRef} from "react"
import logo from './logo.svg';
import './App.css';
import {Slideshow} from './slideshow.js'
import wordsoflove from './fonts/WORDSOFLOVE.ttf'
import Sound from 'react-sound'
import loversRock from './songs/loversRock.mp3'

function App() {
  const [elinaClick, setElinaClick] = useState(false);
  function loginClick(){
    setElinaClick(true)
  }
  return (
    <div className="App">
        {elinaClick == false ? 
          <div className="fitContainer" style={{backgroundColor: "pink", width: '100%'}}>
            <button style={{fontSize: 30}} onClick={loginClick}> Click Me </button>
          </div> : <Slideshow />}
        <Sound
            url={loversRock}
            playStatus={elinaClick ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={300}
        />
    </div>
  );
}

export default App;
