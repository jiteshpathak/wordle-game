import React from 'react'

export default function Keyboard({guessedKeys, word}) {



const letter = {
    "a" : 0,
    "b" : 0,
    "c" : 0,
    "d" : 0,
    "e" : 0,
    "f" : 0,
    "g" : 0,
    "h" : 0,
    "i" : 0,
    "j" : 0,
    "k" : 0,
    "l" : 0,
    "m" : 0,
    "n" : 0,
    "o" : 0,
    "p" : 0,
    "q" : 0,
    "r" : 0,
    "s" : 0,
    "t" : 0,
    "u" : 0,
    "v" : 0,
    "w" : 0,
    "x" : 0,
    "y" : 0,
    "z" : 0,
}

for(let i = 0; i<guessedKeys.length;i++){
    if(word.includes(guessedKeys.charAt(i))){
        letter[guessedKeys.charAt(i)] = 2;
    }
    else{
        letter[guessedKeys.charAt(i)] = 1;
    }
}

function colour(ch){
    if(letter[ch] == 2){
        return "kbd bg-green-500"
    }
    else if(letter[ch] == 1){
        return "kbd bg-gray-500"
    }
    else {
        return "kbd"
    }
}

    return (
        <div>
          <div className="my-1 flex w-full justify-center gap-1 bg">
      <kbd className={colour("q")}>q</kbd>
      <kbd className={colour("w")}>w</kbd>
      <kbd className={colour("e")}>e</kbd>
      <kbd className={colour("r")}>r</kbd>
      <kbd className={colour("t")}>t</kbd>
      <kbd className={colour("y")}>y</kbd>
      <kbd className={colour("u")}>u</kbd>
      <kbd className={colour("i")}>i</kbd>
      <kbd className={colour("o")}>o</kbd>
      <kbd className={colour("p")}>p</kbd>
    </div>
    <div className="my-1 flex w-full justify-center gap-1">
      <kbd className={colour("a")}>a</kbd>
      <kbd className={colour("s")}>s</kbd>
      <kbd className={colour("d")}>d</kbd>
      <kbd className={colour("f")}>f</kbd>
      <kbd className={colour("g")}>g</kbd>
      <kbd className={colour("h")}>h</kbd>
      <kbd className={colour("j")}>j</kbd>
      <kbd className={colour("k")}>k</kbd>
      <kbd className={colour("l")}>l</kbd>
    </div>
    <div className="my-1 flex w-full justify-center gap-1">
      <kbd className={colour("z")}>z</kbd>
      <kbd className={colour("x")}>x</kbd>
      <kbd className={colour("c")}>c</kbd>
      <kbd className={colour("v")}>v</kbd>
      <kbd className={colour("b")}>b</kbd>
      <kbd className={colour("n")}>n</kbd>
      <kbd className={colour("m")}>m</kbd>
    </div>
        </div>
      )
    }