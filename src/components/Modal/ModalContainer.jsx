import { Modal } from 'antd';
import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import { closeModalAction, sendNameAction } from '../../redux/actions';
import { socket } from '../../socket/socket';



export const ModalContainer = ({Body}) => {

  const {visible, title} = useSelector(state => state.modal)
  const userName = useSelector(state => state.userName)

  const dispatch = useDispatch()

  const canselModal = () => {
    if(!userName){
      socket.emit('no name')
    }
    dispatch(closeModalAction())
  }

  return (
    <>
      <Modal
        title={title}
        visible={visible}
        onCancel={canselModal}
        onOk={() => dispatch(sendNameAction(userName))}
      >
        <Body />

      </Modal>
    </>
  )
}
