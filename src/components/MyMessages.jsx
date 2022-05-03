


export const MyMessages = ({ messages }) => {
  return (
    <div className="media media-chat media-chat-reverse">
      <div className="media-body">
        {
          messages.map((message, key) =>
            <p key={key}>{message.text}</p>
          )
        }
        {/* <p className="meta"><time dateTime="2018">00:06</time></p> */}
      </div>
    </div>
  )
}