import React from 'react'
import styled from 'styled-components/native'
import ScreenContainer from './ScreenContainer'
import Input from './Input'

const AddTraveller = () => (
  <ScreenContainer>
    <Title>Add New Traveller</Title>
    <Input placeholder="Title" />
    <Input placeholder="First Name" />
    <Input placeholder="Last Name" />
    <Input placeholder="Date of Birth" />
  </ScreenContainer>
)
const Title = styled.Text``
export default AddTraveller
