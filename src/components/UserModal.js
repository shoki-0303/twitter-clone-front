import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: 'auto',
    textAlign: 'center',
  }
}

class UserModal extends React.Component {
  render (){
    return (
      <Modal
        style={customStyles}
      >
        UserModal
      </Modal>
    );
  }
}

export default UserModal