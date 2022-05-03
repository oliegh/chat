import { ADD_MESSAGE } from "../../type";

const initialState = []

export const messageLog = (state = initialState, action ) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.data]
      
  
    default:
      return state
  }
}