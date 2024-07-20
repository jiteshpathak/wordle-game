import React from 'react'

export default function Letters({guessedWord, word}) {
  function compare(a){
    if (guessedWord.charAt(a)==word.charAt(a)){
        return "kbd bg-green-500"
    }
    else if(word.includes(guessedWord.charAt(a))){
        return "kbd bg-yellow-500"
    }
    else{
        return "kbd"
    }
  }
    return (
    <div className='flex justify-center gap-2'>
      <kbd className={compare(0)}>{guessedWord.charAt(0)}</kbd>
      <kbd className={compare(1)}>{guessedWord.charAt(1)}</kbd>
      <kbd className={compare(2)}>{guessedWord.charAt(2)}</kbd>
      <kbd className={compare(3)}>{guessedWord.charAt(3)}</kbd>
      <kbd className={compare(4)}>{guessedWord.charAt(4)}</kbd>
    </div>
  )
}