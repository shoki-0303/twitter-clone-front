import React from 'react'
import Modal from 'react-modal'
import styled, { css } from 'styled-components'
import SiginUp from './SignUp'
import SignIn from './SignIn'

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
    padding: 15 + 'px',
  }
}

const Content = styled.div`
  position: relative;
`
const CloseBtn = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bold;
  display: inline-block;
`
const List = styled.ul`
  display: flex;
`
const ListCell = styled.li`
  display: inline-block;
  list-style: none;
  padding: 15px 30px;
  border-bottom: solid 1px gray;
  ${(props)=>
    props.isActive === true ?
    css`
      border-bottom: solid 2px pink;
    `
    :
    css`
      border-bottom: solid 2px #5a484852;
    `
  };
`
const FormContent = styled.div``

class UserModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {isOpenRegister: true}
  }
  render (){
    return (
      <Modal
        style={customStyles}
        onAfterOpen={this.afteropenAuthModal}
        isOpen={this.props.common.isOpenModal}
        contentLabel="UserModel"
        ariaHideApp={false}
      >
        <Content>
          <CloseBtn
            onClick={()=>{this.props.commonActions.closeModal()}}
          >
            ×
          </CloseBtn>
          <List>
            <ListCell
              isActive={this.state.isOpenRegister}
              onClick={()=>{this.setState({isOpenRegister: true})}}
            >
              新規登録
            </ListCell>
            <ListCell
              isActive={!this.state.isOpenRegister}
              onClick={()=>{this.setState({isOpenRegister: false})}}            
            >
              ログイン
            </ListCell>
          </List>
          <FormContent>
            { this.state.isOpenRegister ? (
              <SiginUp/>
            ) : (
              <SignIn/>
            )
            }
          </FormContent>
        </Content>
      </Modal>
    );
  }
}

export default UserModal