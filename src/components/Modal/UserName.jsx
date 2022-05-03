import { Button, Col, Input, Row } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { nameChangeAction } from "../../redux/actions"
import { socket } from "../../socket/socket"


export const UserName = () => {

  // const [nameUser, setNameUser] = useState('')

  const nameUser = useSelector(state => state.userName)
  const dispatch = useDispatch()

 
  const nameChange = e => {
    e.preventDefault()
    // setNameUser(e.target.value)
  }

  const sendName = e => {
    e.preventDefault()
    socket.emit('name user', nameUser)
  }

  return (
    <Row>
      <Col span={24}>
        <Input placeholder='Введите ваше имя' value={nameUser} onChange={ e => dispatch(nameChangeAction(e.target.value))}  /> <Button  onClick={sendName} >Соранить</Button>
      </Col>
    </Row>
  )
}