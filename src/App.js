import './App.css';
import { useState } from 'react';
import { OtherMessages } from './components/OtherMessages';
import { MyMessages } from './components/MyMessages';
import { useSelector } from 'react-redux';

import { UserName } from './components/Modal/UserName';
import { ModalContainer } from './components/Modal/Modal';
import { Alert } from 'antd';


function App({ socket }) {

  const [msgValue, setMsgValue] = useState('')
  const messageLog = useSelector(state => state.messageLog)
  const Name = useSelector(state => state.userName)
  const sessionId = useSelector(state => state.connectId)
  const { visibleAlert, typeAlert, message } = useSelector(state => state.alert)

  const msgHandler = e => {
    setMsgValue(e.target.value)
  }

  const sendMessage = (e) => {
    if (e.key === 'Enter') {
      socket.emit('chat message', msgValue)
      setMsgValue('')
    }
  }



  return (
    <div className="App">

      {
        visibleAlert
        ?
        <Alert message={message} type={typeAlert} className='alert-position' />         
        :
        <></>
      }

      <ModalContainer Body={UserName} />

      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card card-bordered">
                <div className="card-header">
                  <h4 className="card-title"><strong>Chat: {Name}</strong></h4>
                </div>
                <div className="ps-container ps-theme-default ps-active-y chat-content" id="chat-content">

                  {
                    messageLog.map((item) => {
                      if (item.userData.id === sessionId.id) {
                        return <MyMessages messages={[item]} />
                      } else if(item.userData.id !== sessionId.id) {
                        return <OtherMessages messages={[item]} />
                      }
                    })
                  }

                  {/* <OtherMessages messages={messageLog} /> */}
                  {/* <div className="media media-meta-day">Today</div> */}
                  {/* <MyMessages messages={[]} /> */}



                </div>
                <div className="publisher bt-1 border-light">
                  <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                  <input className="publisher-input" type="text" value={msgValue} onChange={msgHandler} onKeyPress={sendMessage} placeholder="Write something" />
                  <span className="publisher-btn file-group">
                    <i className="fa fa-paperclip file-browser"></i>
                    <input type="file" /> </span> <a className="publisher-btn" href="#" data-abc="true">
                    <i className="fa fa-smile"></i></a>
                  <a className="publisher-btn text-info" href="#" data-abc="true">
                    <i className="fa fa-paper-plane"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
