import React from "react"
import Die from "./Die"



export default function App() {
  return (
    <main className="h-screen flex items-center justify-center w-screen m-auto bg-slate-800 overflow-hidden p-6 ">
      <div className="grid grid-cols-5 gap-4 bg-gray-100 p-4 rounded-lg items-center max-h-96 ">
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        <Die value={1}/>
        
      </div>
      
      
      
    </main>    
  )
}