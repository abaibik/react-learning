import { useState } from "react";
import { AUTHORS } from "../utils";

const Form = ({ onSend }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSend({ text: value, author: AUTHORS.human });
    setValue("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input type="text" autoFocus value={value} onChange={handleChange} />

      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
