import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Letters from "./components/Letters";

function App() {
  const [guessed, setGuessed] = useState("");
  const [guess1, setGuess1] = useState("");
  const [guess2, setGuess2] = useState("");
  const [guess3, setGuess3] = useState("");
  const [guess4, setGuess4] = useState("");
  const [guess5, setGuess5] = useState("");
  const [guess6, setGuess6] = useState("");
  const [guess, setGuess] = useState(1);
  const [currGuess, setCurrGuess] = useState("");
  const word = "house";

  function something(e) {
    if (guess == 1) {
      setGuess1(e.target.value);
      setCurrGuess(e.target.value);
    } else if (guess == 2) {
      setGuess2(e.target.value);
      setCurrGuess(e.target.value);
    } else if (guess == 3) {
      setGuess3(e.target.value);
      setCurrGuess(e.target.value);
    } else if (guess == 4) {
      setGuess4(e.target.value);
      setCurrGuess(e.target.value);
    } else if (guess == 5) {
      setGuess5(e.target.value);
      setCurrGuess(e.target.value);
    } else {
      setGuess6(e.target.value);
      setCurrGuess(e.target.value);
    }
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      setGuess(guess + 1);
      setGuessed(guessed+currGuess)
      setCurrGuess("");
    }
  }

  return (
    <>
      <div className="">
      <input
        type="text"
        className="input w-full h-full absolute z-50 text-transparent bg-transparent decoration-transparent focus:outline-none  cursor-default"
        onChange={something}
        onKeyDown={handleEnter}
        value={currGuess}
      />
        <Letters guessedWord={guess1} word={word}></Letters>
        <Letters guessedWord={guess2} word={word}></Letters>
        <Letters guessedWord={guess3} word={word}></Letters>
        <Letters guessedWord={guess4} word={word}></Letters>
        <Letters guessedWord={guess5} word={word}></Letters>
        <Letters guessedWord={guess6} word={word}></Letters>
      </div>

      <Keyboard guessedKeys={guessed} word={word}></Keyboard>
    </>
  );
}
export default App;
