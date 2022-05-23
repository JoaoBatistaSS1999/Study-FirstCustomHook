import { useState, useEffect } from "react";

const useCounter = (forwards = true, initialValue = 0, stepValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + stepValue);
      } else {
        setCounter((prevCounter) => prevCounter - stepValue);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [forwards, initialValue, stepValue]);

  return counter;
};

export default useCounter;
