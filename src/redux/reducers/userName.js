import { NAME_CHANGE } from "../../type";

const initialState = ''


export const userName = (state = initialState, action) => {
  switch (action.type) {
    case NAME_CHANGE:
      return action.data

    default:
      return state
  }
}