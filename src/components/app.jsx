import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function wordCount(innerText) {
    const wordsArr = innerText.trim().split(" ");
    return wordsArr.filter(word => word !== "").length;
  }

  return (
    <main>
      <h1>This is a word game</h1>
      <textarea value={text} onChange={handleChange} />
      <h3>Time remaining: </h3>
      <button type="submit" onClick={() => wordCount(text)}>Start the game</button>
      <h1>Number of words: {count} </h1>
    </main>
  );
}

export default App;
