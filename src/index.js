import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import './socket/socket'
import { socket } from './socket/socket'
import './socket/socketManager'
import 'antd/dist/antd.css'
import { store } from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App socket={socket} />
    </React.StrictMode>
  </Provider>
);
