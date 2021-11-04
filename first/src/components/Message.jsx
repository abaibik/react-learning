const Message = ({ message }) => {
  const { text, author } = message;
  return (
    <div className="message">
      <span className="message-author">{author}</span>:
      <span className="message-text">{text}</span>
    </div>
  );
};
export default Message;
