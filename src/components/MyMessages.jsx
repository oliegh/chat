


export const MyMessages = ({ messages }) => {
  return (
    <div className="media media-chat media-chat-reverse">
      <div className="media-body">
        {
          messages.map((message, key) =>
            <p key={key}>{message.text}</p>
          )
        }
      </div>
    </div>
  )
}