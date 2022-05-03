import { Button, Modal } from 'antd';
import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import { closeModalAction, sendNameAction, showModalAction } from '../../redux/actions';
import { socket } from '../../socket/socket';



export const ModalContainer = ({Body}) => {

  const Pacifier = () => {
    return <></>
  }

  const {visible, title} = useSelector(state => state.modal)
  const userName = useSelector(state => state.userName)

  const dispatch = useDispatch()

  return (
    <>
      <Modal
        title={title}
        visible={visible}
        onCancel={() => dispatch(closeModalAction())}
        onOk={() => dispatch(sendNameAction(userName))}
      >
        <Body />

      </Modal>
    </>
  );
};



  // return (
  //   <div className={'modal ' + status ? 'show' : ''}>
      
  //   </div>
  // )
// }