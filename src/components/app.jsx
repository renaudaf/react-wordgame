import React, { useState, useEffect, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const textAreaRef = useRef(null);

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function wordCount(innerText) {
    const wordsArr = innerText.trim().split(" ");
    return wordsArr.filter(word => word !== "").length;
  }

  function handleClick() {
    setIsTimerOn(true);
    setText("");
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  }

  function endGame() {
    setIsTimerOn(false);
    setCount(wordCount(text));
  }

  useEffect(() => {
    if (timeRemaining > 0 && isTimerOn) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimerOn]);

  return (
    <main>
      <h1>This is a word game</h1>
      <textarea disabled={!isTimerOn} value={text} onChange={handleChange} ref={textAreaRef} />
      <h3>Time remaining: {timeRemaining} </h3>
      <button disabled={isTimerOn} type="submit" onClick={handleClick}>Start the game</button>
      <h1>Number of words: {count} </h1>
    </main>
  );
}

export default App;
