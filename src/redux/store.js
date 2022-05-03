import thunk from 'redux-thunk'
import { rootReducer } from '../redux/rootReducer'
import { applyMiddleware, compose, createStore } from 'redux'


export const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)