import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 15px;
`
const StatusCode = styled.p`
  padding-top: 10px;
  font-size: 30px;
  text-align: center;
`
const Message = styled.p`
  padding-top: 15px;
  font-size: 20px;
  text-align: center;
`
const Content = styled.p`
  padding-top: 10px;
  font-size: 13px;
  line-height: 20px;
`

const Error = ({statusCode}) => {
  console.log(statusCode)
  return(
    <Wrapper>
      <StatusCode>{statusCode}</StatusCode>
      <Message>
        {statusCode === 404 ? 'Not Found' : 'メンテナンス中です'}
      </Message>
      <Content>
        {statusCode === 404 ?
          'ページが見つかりませんでした。ページが削除または移動された場合があります。'
          : '現在メンテナンス中です。しばらく時間をおいて再度アクセスしてください。'
        }
        <br/>
        ご迷惑をおかけして申し訳ありません。
      </Content>
    </Wrapper>
  );
}

export default Error