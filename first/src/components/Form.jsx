import { useState } from "react";
import { AUTHORS } from "../utils";

const Form = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleButtonClick = () => {
    onSend({ text: value, author: AUTHORS.human });
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        autoFocus
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleButtonClick}>Send</button>
    </div>
  );
};

export default Form;
