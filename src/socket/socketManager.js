import { socket } from './socket';
import { addMessageAction, alertAction, nameChangeAction, setIdAction } from '../redux/actions'
import { store } from '../redux/store';


socket.on('connect id', function (data) {
  store.dispatch(setIdAction(data))
})

socket.on('new message', function (data) {
  store.dispatch(addMessageAction(data))
})

socket.on('set name', function (data) {
  store.dispatch(nameChangeAction(data))
})

socket.on('new user', function (data) {
  store.dispatch(nameChangeAction(data))
})

socket.on('connect', () => store.dispatch(alertAction('success', 'Соединение установлено!')))
socket.on('connect_error', () => store.dispatch(alertAction('error', 'Ошибка соединения!')))
socket.on('connect_failed', () => store.dispatch(alertAction('error', 'Соединение прервано!')))