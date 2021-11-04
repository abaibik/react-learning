import Message from "./Message";

const MessageList = ({ messageList }) => {
  return (
    <div>
      {messageList.map((message) => {
        return <Message text={message.text} />;
      })}
    </div>
  );
};

export default MessageList;
