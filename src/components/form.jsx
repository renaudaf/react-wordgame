import React, { useState } from "react";

const Form = () => {
  const [time, setTime] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setTime(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(time);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-c">
        <input className="input-form" type="text" placeholder="How many seconds?" value={time} onChange={handleChange} />
        <button type="submit">Set Time</button>
      </div>
    </form>
  );
};

export default Form;
