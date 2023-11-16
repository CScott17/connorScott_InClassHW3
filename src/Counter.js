import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const initialCount = parseInt(localStorage.getItem("countValue")) || 0;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    localStorage.setItem("countValue", count.toString());
  }, [count]);

  const minusCount = () => {
    setCount(count - 1);
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <div className="count">
        <h1>{count}</h1>
      </div>
      <div className="buttons">
        <div className="button">
          <button onClick={minusCount}>-</button>
        </div>
        <div className="button">
          <button onClick={plusCount}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
