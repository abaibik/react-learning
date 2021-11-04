import Message from "./Message";

const MessageList = ({ messageList }) => {
  return (
    <div>
      {messageList.map((message) => {
        return <Message message={message} key={message.id} />;
      })}
    </div>
  );
};

export default MessageList;
