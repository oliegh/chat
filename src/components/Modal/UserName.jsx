import { Button, Col, Input, Row } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { nameChangeAction } from "../../redux/actions"
import { socket } from "../../socket/socket"


export const UserName = () => {

  const nameUser = useSelector(state => state.userName)
  const dispatch = useDispatch()

  const sendName = e => {
    e.preventDefault()
    socket.emit('name user', nameUser)
  }

  return (
    <Row className="mt-2">
      <Col span={24}>
        <Input placeholder='Введите ваше имя' value={nameUser} onChange={ e => dispatch(nameChangeAction(e.target.value))}  /> 
        <Button className="mt-1" onClick={sendName} >Сохранить</Button>
      </Col>
    </Row>
  )
}