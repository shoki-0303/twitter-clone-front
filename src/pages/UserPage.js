import React from 'react'
import Error from '../components/Error'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 15px;
`
const Content = styled.div``
const Image = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: #80808036;
  margin: 15px auto 0;
`
const Description = styled.p`
  text-align: center;
  padding-top: 15px;
`

class UserPage extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id
    this.props.userActions.fetchUser(id)
  }
  render() {
    const { user } = this.props
    if (user.error.status === 404) {
      return <Error statusCode={user.error.status}/>
    }
    return(
      <Wrapper>
        <Content>
          <Image/>
          <Description>
            userさんがお気に入りをしたカード一覧です。
          </Description>
        </Content>
      </Wrapper>
    );
  }
}

export default UserPage