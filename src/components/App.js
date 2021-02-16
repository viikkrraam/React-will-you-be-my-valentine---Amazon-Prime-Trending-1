import React, {Component, useState} from "react";
import '../styles/App.css';

const App = ({ slides }) => {
  const [increment, setIncrement] = useState(0);
  const [isDisabled1, setDisabled1] = useState(true);
  const [isDisabled2, setDisabled2] = useState(false);
  const [isDisabled3, setDisabled3] = useState(true);

  const prevHandler = () => {
    if (increment !== 0) {
      setIncrement((increment) => increment - 1);
      if (increment - 1 === 0) {setDisabled1(true);
      setDisabled3(true)}
    }
    setDisabled2(false);
  };
  const nextHandler = () => {
    if (increment !== slides.length - 1) {
      setIncrement((increment) => increment + 1);
      if (increment + 1 === slides.length - 1) setDisabled2(true);
    }
    setDisabled1(false);
    setDisabled3(false);
  };
  const resetHandler = () => {
    setIncrement(0);
    setDisabled1(true);
    setDisabled2(false);
    setDisabled3(true)
  };
  return (
    <>
      <h1 data-testid="title">{slides[increment].title}</h1>
      <p data-testid="text">{slides[increment].text}</p>
      <button
        data-testid="button-prev"
        onClick={prevHandler}
        disabled={isDisabled1}
      >
        Prev
      </button>
      <button data-testid="button-restart" onClick={resetHandler} disabled={isDisabled3}>
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
