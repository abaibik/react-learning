import Message from "./Message";

const MessageList = ({ messageList }) => {
  return (
    <div>
      {messageList.map((message) => {
        return <Message text={message.text} key={message.id} />;
      })}
    </div>
  );
};

export default MessageList;
