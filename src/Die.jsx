import React from 'react'

const Die = (props) => {
  return (
    <button
      className={`bg-green-400 md:h-14 md:w-14 h-12 w-12 rounded-lg border-0 text-lg font-bold shadow-lg cursor-pointer ${props.isHeld ? "bg-green-400" : "bg-white"}`}
      onClick={() => props.hold(props.id)}
      pressed={props.isHeld}
      aria-label={`Die with a value of ${props.value}, ${props.isHeld ? "Held" : "Not held"}`}
    >
      {props.value}
    </button>
  )
}

export default Die