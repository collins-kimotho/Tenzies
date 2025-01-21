import React from 'react'

const Die = (props) => {
  return (
    
    <button className={`bg-white h-14 w-14 rounded-lg border-0 text-lg font-bold shadow-lg cursor-pointer ${props.isHeld ? "bg-green-400" : "bg-white"}`}>
        {props.value}
    </button>

  )
}

export default Die