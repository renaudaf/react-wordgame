import React from "react";

function App() {
  return (
    <main>
      <h1>This is a word game</h1>
      <textarea />
      <h3>Time remaining: </h3>
      <button type="submit">Start the game</button>
      <h1>Number of words: </h1>

    </main>
  );
}

/**
 * Challenge: build the basic structure of our game
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in 
 *      (tip: React normalizes <textarea /> to be more like <input />, 
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */
export default App;
