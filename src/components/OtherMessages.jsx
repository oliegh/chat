

export const OtherMessages = ({messages}) => {
  return (
    <div className="media media-chat">

      <div className="media-body">
        {
          messages.map((message, key) => 
          <p key={key}>{message.userData.name}: {message.text}</p>
          )
        }
      </div>
    </div>
  )
}