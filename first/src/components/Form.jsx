import { useState } from "react";

const Form = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleButtonClick = () => {
    onSend({ text: value, author: "Me" });
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleButtonClick}>Send</button>
    </div>
  );
};

export default Form;
