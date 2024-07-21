import { useEffect, useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Letters from "./components/Letters";
import Loading from "./components/Loading";
import Won from "./components/Won";
import NotWin from "./components/NotWin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


function App() {
  const [load, setLoad] = useState(true);
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    async function getWord() {
      if (!answer) {
        try {
          const response = await fetch(
            "https://random-word-api.herokuapp.com/word?lang=en&length=5"
          );
          const data = await response.json();
          setAnswer(data[0]);
          setLoad(false);
        } catch (error) {
          console.log(error);
        }
      }
    }
    getWord();
  }, []);
  console.log(answer);
  const [guessed, setGuessed] = useState("");
  const [guess1, setGuess1] = useState("");
  const [guess2, setGuess2] = useState("");
  const [guess3, setGuess3] = useState("");
  const [guess4, setGuess4] = useState("");
  const [guess5, setGuess5] = useState("");
  const [guess6, setGuess6] = useState("");
  const [guess, setGuess] = useState(1);
  const [currGuess, setCurrGuess] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [checkAns, setCheckAns] = useState("");

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
    if (e.key === "Enter" && currGuess.length == 5) {
      if (guess == 1) {
        setCheck1(true);
      } else if (guess == 2) {
        setCheck2(true);
      } else if (guess == 3) {
        setCheck3(true);
      } else if (guess == 4) {
        setCheck4(true);
      } else if (guess == 5) {
        setCheck5(true);
      } else {
        setCheck6(true);
      }
      setGuess(guess + 1);
      setGuessed(guessed + currGuess);
      setCheckAns(currGuess);
      setCurrGuess("");
    }
  }
  console.log(guess);
  setInterval(() => {
    setLoad(false);
  }, 500);
  if (load) {
    return <Loading />;
  }

  if (checkAns == answer && guess > 1) {
    return <Won guessCount={guess}> </Won>;
  } else if ((checkAns != answer) & (guess == 7)) {
    return <NotWin guessCount={guess} actualWord={answer}></NotWin>;
  }
  return (
    <>
      <Header>
      </Header>
      <div>
        <input
          type="text"
          className="input w-full h-full absolute z-50 text-transparent bg-transparent decoration-transparent focus:outline-none  cursor-default border-none"
          onChange={something}
          onKeyDown={handleEnter}
          value={currGuess}
          maxLength={5}
          minLength={5}
        />
        <Letters guessedWord={guess1} word={answer} check={check1}></Letters>
        <Letters guessedWord={guess2} word={answer} check={check2}></Letters>
        <Letters guessedWord={guess3} word={answer} check={check3}></Letters>
        <Letters guessedWord={guess4} word={answer} check={check4}></Letters>
        <Letters guessedWord={guess5} word={answer} check={check5}></Letters>
        <Letters guessedWord={guess6} word={answer} check={check6}></Letters>
      </div>

      <Keyboard guessedKeys={guessed} word={answer}></Keyboard>
      <Footer></Footer>
    </>
  );
}
export default App;