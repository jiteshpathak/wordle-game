import React from 'react'

export default function Letters({guessedWord, word, check}) {
  function compare(a){
    if (check) {
    if (guessedWord.charAt(a)==word.charAt(a)){
        return "kbd bg-green-500"
    }
    else if (word.includes(guessedWord.charAt(a))){
        return "kbd bg-yellow-500"
    }
    else {
        return "kbd bg-gray-500"
    }
  }
    else{
      return "kbd"
    }
  }
  function highlight(num){
    if (num < guessedWord.length){
      return "border border-slate-500"
    }
  }
    return (
    <div className='flex justify-center gap-2 pb-1 pt-2'>
      <kbd className={`${compare(0)} ${highlight(0)}`}>{guessedWord.charAt(0).toUpperCase()}</kbd>
      <kbd className={`${compare(1)} ${highlight(1)}`}>{guessedWord.charAt(1).toUpperCase()}</kbd>
      <kbd className={`${compare(2)} ${highlight(2)}`}>{guessedWord.charAt(2).toUpperCase()}</kbd>
      <kbd className={`${compare(3)} ${highlight(3)}`}>{guessedWord.charAt(3).toUpperCase()}</kbd>
      <kbd className={`${compare(4)} ${highlight(4)}`}>{guessedWord.charAt(4).toUpperCase()}</kbd>
    </div>
  )
}