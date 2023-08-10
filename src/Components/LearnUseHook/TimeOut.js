import React, { useState, useEffect } from "react";

const TimeOut = () => {
  const [countDown, setCountDown] = useState(180);
  useEffect(() => {
    setTimeout(() => {
      setCountDown((prevState) => prevState - 1);
    }, 1000);
  }, [countDown]);
  return (
    <div>
      <h1>{countDown}</h1>
    </div>
  );
};

export default TimeOut;
