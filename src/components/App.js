import React, {Component, useState} from "react";
import '../styles/App.css';

import Slides from "./data.js"
const App = () => {
  const [increment,setIncrement]=useState(0)
  const prevHandler=()=>{
    if(increment!==0){
      setIncrement(increment=>increment-1)
    }
  }
  const nextHandler=()=>{
    if(increment!==Slides.length-1){
      setIncrement(increment=>increment+1)
    }
  }
  const resetHandler=()=>{
    setIncrement(0);
  }
  return (
    <>
    <h1 data-testid="title">{Slides[increment].title}</h1>
    <p data-testid="text">{Slides[increment].text}</p>
    <button data-testid="button-prev" onClick={prevHandler}>prev</button>
    <button data-testid="button-restart" onClick={resetHandler}>restart</button>
    <button data-testid="button-next" onClick={nextHandler}>next</button>
    </>
  )
}


export default App;
