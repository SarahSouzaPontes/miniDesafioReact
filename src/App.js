import './App.css';
import imagemLogo from './assets/logo.svg';
import imagemNext from './assets/next.svg';
import imagemPause from './assets/pause.svg';
import imagemPlay from './assets/play.svg';
import imagemPrevious from './assets/previous.svg';
import imagemProfile from './assets/profile.jpg';
import imagemStop from './assets/stop.svg';
import musics from './musics'
import { useState, useRef } from 'react'

function App() {
  const [music, setMusic] = useState({})
  const [isplay, setisplay] = useState(false)
  const player = useRef()
  function handleMusic(msc) {
    setMusic(msc)
  }
  function toggleButton() {
    const previous = isplay
    setisplay(!previous)
    if (!previous) {
      player.current.play()
    } else {
      player.current.pause()
    }
  }
  return (
    <div className="container">
      <header>
        <img src={imagemLogo} />
        <div className="login">
          <img src={imagemProfile} />
          <p>Bem vindo, Sarah.</p>
        </div>
      </header >
      <div className="divPlayList">
        <h1>The best play list</h1>
        <div className="cards">
          {musics.map((music) => (
            <div key={music.id} className="card">
              <img onClick={() => handleMusic(music)} src={music.cover} alt='' />
              <h2>{music.title}</h2>
              <p>{music.description}</p>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div><h3>{music.title}</h3><h4>{music.artist}</h4></div>
        <div className="controls">
          <audio src={music.url} ref={player} />
          <button><img id="stop" src={imagemStop} /></button>
          <button> <img id="next" src={imagemPrevious} /></button>
          <button onClick={toggleButton}> <img id="play" src={isplay ? imagemPause : imagemPlay} /></button>
          <button><img id="previous" src={imagemNext} /></button>
        </div>
      </footer>
    </div >
  );
}

export default App;
