import reactDom from 'react-dom';
import './App.css';

import imagemLogo from './assets/logo.svg';
import imagemNext from './assets/next.svg';
import imagemPause from './assets/pause.svg';
import imagemPlay from './assets/play.svg';
import imagemPrevious from './assets/previous.svg';
import imagemProfile from './assets/profile.jpg';
import imagemStop from './assets/stop.svg';
import robinson from './assets/robinson.jpg';
import casablanca from './assets/casablanca.jpg';
import bonequinha from './assets/bonequinha.jpg';
import star from './assets/star.jpg';


function App() {
  return (
    <div className="container">
      <header>
        <hr></hr>
        <div className="logoCubos">
          <img src={imagemLogo}></img>
        </div>
        <div className="login">
          <img src={imagemProfile}></img>
          <p>Bem vindo, Daniel.</p>
        </div>
      </header>
      <div className="divPlayList">
        <h1>The best play list</h1>
        <hr></hr>
        <div className="cards">
          <ul>
            <li>
              <div className="card1">
                <img src={casablanca}></img>
                <h1>As Time Goes By – Casablanca (1942)</h1>
                <span>“Play it again, Sam”. Uma das frases mais famosas do cinema, na verdade nunca dita (o correto é “play it, Sam”), gira em torno de uma canção escrita dez anos antes por Herman Hupfeld. No filme, Ingrid Bergman pede ao pianista (Dooley Wilson) que toque a música que marcou seu romance com o personagem de Humphrey Bogart.</span>
              </div>
            </li>
            <li>
              <div className="card2">
                <img src={bonequinha}></img>
                <h1>Moon River – Bonequinha de Luxo (1961)</h1>
                <span>Muita gente não sabe, mas a clássica canção “Moon River”, interpretada por dezenas de artistas ao longo das décadas, incluindo Frank Sinatra, foi escrita especialmente para o filme “Bonequinha de Luxo” e adaptada para o alcance vocal de Audrey Hepburn.</span>
              </div>
            </li>
            <li>
              <div className="card3">
                <img src={robinson}></img>
                <h1>Mrs Robinson – A Primeira Noite de Um Homem (1967)</h1>
                <span>Dustin Hoffman se envolve com uma mulher mais velha no filme de 1967, e é exatamente sobre essa situação que fala a música de Simon e Garfunkel, criada para o longa. Não é à toa que “Mrs. Robinson” se tornou uma piada interna, representando todas as mulheres que se relacionam com garotos mais jovens.</span>
              </div>
            </li>
            <li>
              <div className="card4">
                <img src={star}></img>
                <h1>Marcha Imperial – Star Wars (1977)</h1>
                <span>Só de ouvir três ou quatro notas da composição de John Williams, a imagem do vilão Darth Vader e seu exército de Stormtroopers já vem à mente, acompanhada por naves espaciais e batalhas de sabres de luz. Todo um universo fantástico é representado por este tema inesquecível.</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <footer>
        <div className="controlBar">

        </div>

        <div className="nameMusic">
          <h1>Violão acústico</h1>
          <p>Robert Mayer</p>

        </div>

        <div className="progressBar">
          <p id="curretTime"></p>
          <p id="endTime"></p>
          <hr id="linhaCinza"></hr>
          <hr id="linhaRosa"></hr>
          <div className="circulo"></div>


        </div>

        <div className="controls"></div>
        <img id="stop" src={imagemStop}></img>
        <img id="next" src={imagemNext}></img>
        <img id="pause" src={imagemPause}></img>
        <img id="play" src={imagemPlay}></img>
        <img id="previous" src={imagemPrevious}></img>
      </footer>
    </div >
  );
}

export default App;
