import { CLOSE_MODAL, SHOW_MODAL } from "../../type"

const initialState = {
  visible: true,
  title: '',
  Body: null,

}

export const modal = (state = initialState, action) => {

  switch (action.type) {
    case CLOSE_MODAL:

      return { ...state, visible: false }

    case SHOW_MODAL:
      return { ...state, visible: true }

    default:
      return state
  }
}