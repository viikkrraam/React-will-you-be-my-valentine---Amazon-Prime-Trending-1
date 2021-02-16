import React, {Component, useState} from "react";
import '../styles/App.css';
import Slides from "../data.js"
const App = () => {
  const [increment, setIncrement] = useState(0);
  const [isDisabled1, setDisabled1] = useState(false);
  const [isDisabled2, setDisabled2] = useState(false);

  const prevHandler = () => {
    if (increment !== 0) {
      setIncrement((increment) => increment - 1);
      if(increment-1===0)
        setDisabled1(true);
    } 
    setDisabled2(false);
  };
  const nextHandler = () => {
    if (increment !== Slides.length - 1) {
      setIncrement((increment) => increment + 1);
      if(increment+1===slides.length-1)
        setDisabled2(true);
    } 
    setDisabled1(false);
  };
  const resetHandler = () => {
    setIncrement(0);
    setDisabled1(true);
    setDisabled2(false);
  };
  return (
    <>
      <h1 data-testid="title">{Slides[increment].title}</h1>
      <p data-testid="text">{Slides[increment].text}</p>
      <button
        data-testid="button-prev"
        onClick={prevHandler}
        disabled={isDisabled1}
      >
       Prev 
      </button>
      <button data-testid="button-restart" onClick={resetHandler}>
        Restart
      </button>
      <button
        data-testid="button-next"
        onClick={nextHandler}
        disabled={isDisabled2}
      >
        Next
      </button>
    </>
  );
};

export default App;
