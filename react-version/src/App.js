import "./App.css";
import { useState } from "react";
import MostrarMensaje from "./MostrarMensaje";
const randomNumber = () => Math.trunc(Math.random() * 20) + 1;

function App() {
  const [number, setNumber] = useState("");
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [secretNumber, setSecretNumber] = useState(randomNumber());

  const handleCheck = () => {
    if (number === secretNumber) {
    } else if (number > secretNumber) {
    } else if (number > secretNumber) {
    }
  };
  return (
    <div className="App">
      <div>
        <header>
          <h1>Guess My Number!</h1>
          <p className="between">(Between 1 and 20)</p>
          <button className="btn again">Again!</button>
          <div className="number">{number === secretNumber ? number : "?"}</div>
        </header>
        <main>
          <section className="left">
            <input type="number" className="guess" />
            <button className="btn check" onclick={handleCheck}>
              Check!
            </button>
          </section>
          <section className="right">
            <MostrarMensaje
              score={score}
              number={number}
              secretNumber={secretNumber}
            />
            <p className="message">Start guessing...</p>
            <p className="label-score">
              💯 Score: <span className="score">{score}</span>
            </p>
            <p className="label-highscore">
              🥇 Highscore: <span className="highscore">{highscore}</span>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
