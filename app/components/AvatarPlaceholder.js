import React from 'react'
import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const AvatarPlaceholder = () => (
  <Container>
    <MaterialCommunityIcons name="plus" size={48} color="#23afe3" />
  </Container>
)
const Container = styled.View`
  height: 60px;
  width: 60px;
  border-width: 3px;
  border-color: #23afe3;
  border-style: dashed;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`

export default AvatarPlaceholder
