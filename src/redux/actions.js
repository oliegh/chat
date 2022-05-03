import { useDispatch } from "react-redux"
import { socket } from "../socket/socket"
import { store } from "./store"

const { SESSION_ID, ADD_MESSAGE, SHOW_MODAL, CLOSE_MODAL, NAME_CHANGE, SEND_ALERT, CLOSE_ALERT, SHOW_ALERT } = require("../type")

export const setIdAction = (data) => {
  return {
    type: SESSION_ID,
    data
  }
}

export const addMessageAction = (data) => {
  return {
    type: ADD_MESSAGE,
    data
  }
}

export const showModalAction = () => {
  return {
    type: SHOW_MODAL
  }
}

export const closeModalAction = () => {
  return {
    type: CLOSE_MODAL
  }
}

export const nameChangeAction = (data) => {
  return {
    type: NAME_CHANGE,
    data
  }
}

export const showAlert = () => {
  return {
    type: SHOW_ALERT
  }
}
export const closeAlert = () => {
  return {
    type: CLOSE_ALERT
  }
}

export const alertAction = (typeAlert, message) => {
  return {
    type: SEND_ALERT,
    typeAlert,
    message
  }
}

export const sendNameAction = (data) => {

  socket.emit('name user', data, err => store.dispatch(alertAction('error', err)))

  store.dispatch(closeModalAction())
}



