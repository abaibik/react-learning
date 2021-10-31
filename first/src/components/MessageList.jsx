import Message from "./Message"

const MessageList = ({ messageList }) => {
    return (<>
    {messageList.map((message) => {
        return <Message text={message.text} />
    })}
    </>)
}

export default MessageList