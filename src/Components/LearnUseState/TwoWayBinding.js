import React, { useState } from "react";

const users = [
  { id: 1, name: "John", email: "johnsmith@gmail.com" },
  { id: 2, name: "Alan", email: "alanlee@gmail.com" },
  { id: 3, name: "Chi", email: "treepoo@gmail.com" },
];

const TwoWayBinding = () => {
  const [checked, setChecked] = useState([]);

  const handleSubmit = () => {};
  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id); //kiểm tra xem id có nằm trong mảng checked không
      if (isChecked) {
        //trường hợp có, click lại lần 2 => bỏ click
        return checked.filter((item) => item !== id); //lọc ra mảng mới không chứa phần tử có giá trị = id
      } else {
        return [...prev, id]; //thêm id vào mảng checked
      }
    });
  };
  return (
    <div style={{ padding: 32 }}>
      {users.map((user) => (
        <div key={user.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(user.id)}
            checked={checked.includes(user.id)} //kiểm tra xem id có nằm trong mảng checked không
          />
          {user.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default TwoWayBinding;
