import { useDispatch } from "react-redux"
import { CLOSE_ALERT, SEND_ALERT, SHOW_ALERT } from "../../type"
import { showAlert } from "../actions"
import { store } from "../store"

const initialState = {
  visibleAlert: false,
  typeAction: '',
  message: ''
}



export const alert = (state = initialState, action) => {
  switch (action.type) {
    case SEND_ALERT:
      store.dispatch(showAlert())
      return { ...state, typeAction: action.type, message: action.message }
    case SHOW_ALERT: 
      return {...state, visibleAlert: true} 
    case CLOSE_ALERT: 
      return {...state, visibleAlert: false}
    default:
      return state
  }
}