import { SESSION_ID } from "../../type"

const initialState = {
  id: ''
}

export const connectId = (state = initialState, action) => {
  switch (action.type) {
    case SESSION_ID:
      return {...state, id: action.data}
  
    default:
      return state
  }
}