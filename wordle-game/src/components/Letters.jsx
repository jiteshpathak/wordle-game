import React from 'react'

export default function Letters({guessedWord}) {
  return (
    <div className='flex justify-center gap-2'>
      <kbd className="kbd">{guessedWord.charAt(0)}</kbd>
      <kbd className="kbd">{guessedWord.charAt(1)}</kbd>
      <kbd className="kbd">{guessedWord.charAt(2)}</kbd>
      <kbd className="kbd">{guessedWord.charAt(3)}</kbd>
      <kbd className="kbd">{guessedWord.charAt(4)}</kbd>
      
    </div>
  )
}
