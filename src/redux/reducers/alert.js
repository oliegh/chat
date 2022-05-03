import { CLOSE_ALERT, SEND_ALERT, SHOW_ALERT } from "../../type"


const initialState = {
  visibleAlert: false,
  typeAlert: '',
  message: ''
}

export const alert = (state = initialState, action) => {

  switch (action.type) {
    case SEND_ALERT:
      return { ...state, typeAlert: action.typeAlert, message: action.message }
    case SHOW_ALERT:
      return { ...state, visibleAlert: true }
    case CLOSE_ALERT:
      return { ...state, visibleAlert: false }
    default:
      return state
  }
}