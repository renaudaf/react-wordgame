import { useState, useEffect, useRef } from "react";

const useWordGame = () => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [count, setCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const textAreaRef = useRef(null);

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const wordCount = (innerText) => {
    const wordsArr = innerText.trim().split(" ");
    return wordsArr.filter(word => word !== "").length;
  };

  const handleClick = () => {
    setIsTimerOn(true);
    setText("");
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };

  const endGame = () => {
    setIsTimerOn(false);
    setCount(wordCount(text));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeRemaining(time);
  };

  const handleChangeForm = (event) => {
    const { value } = event.target;
    setTime(value);
  };

  useEffect(() => {
    if (timeRemaining > 0 && isTimerOn) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimerOn]);

  return {
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
  };
};

export default useWordGame;
