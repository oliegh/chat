import { combineReducers } from "redux"
import { modal } from '../redux/reducers/modal'

import { connectId } from '../redux/reducers/connectId'
import { messageLog } from '../redux/reducers/messageLog'
import { userName } from '../redux/reducers/userName'
import { alert } from '../redux/reducers/alert'

export const rootReducer = combineReducers({
  connectId,
  messageLog,
  modal,
  userName,
  alert
})