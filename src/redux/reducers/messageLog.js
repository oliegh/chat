import { ADD_MESSAGE, USER_CONNECT, USER_DISCONNECT } from "../../type";

const initialState = []

export const messageLog = (state = initialState, action ) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.data]
    case USER_CONNECT:
      console.log(action);
      return [...state, {systemMessage: `Подключился новый пользователь: ${action.data.userData.name}`}]
    case USER_DISCONNECT:
      return [...state, {systemMessage: `Пользователь ${action.data.userData.name} отключился...`}]
    default:
      return state
  }
}