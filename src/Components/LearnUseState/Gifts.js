import React, { useState } from "react";

const gifts = ["CPU i9", "RAM 32GB", "RBG Keyboard"];

const Gifts = () => {
  const [gift, setGift] = useState();
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };
  return (
    <div style={{ padding: 32 }}>
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
};

export default Gifts;
