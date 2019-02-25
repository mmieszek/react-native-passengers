import React from 'react'
import styled from 'styled-components/native'
import doge from './assets/doge.png'

const Avatar = () => (
  <Container>
    <Image source={doge} resizeMode="contain" />
  </Container>
)
const Container = styled.View`
  height: 60px;
  width: 60px;
  border-width: 5px;
  border-color: #fed464;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`
const Image = styled.Image`
  height: 40px;
  width: 40px;
`
export default Avatar
