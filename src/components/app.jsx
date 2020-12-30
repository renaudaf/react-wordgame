import React from "react";
import useWordGame from "../hooks/useWordGame";

const App = () => {
  const {
    textAreaRef,
    handleChange,
    handleChangeForm,
    text,
    handleSubmit,
    handleClick,
    timeRemaining,
    count,
    isTimerOn,
    time
  } = useWordGame();

  return (
    <main>
      <h1>This is a word game</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-c">
          <input className="input-form" type="text" placeholder="How many seconds?" value={time} onChange={handleChangeForm} />
          <button type="submit">Set Time</button>
        </div>
      </form>
      <textarea disabled={!isTimerOn} value={text} onChange={handleChange} ref={textAreaRef} />
      <h3>Time remaining: {timeRemaining} </h3>
      <button disabled={isTimerOn} type="submit" onClick={handleClick}>Start the game</button>
      <h1>Number of words: {count} </h1>
    </main>
  );
};

export default App;
