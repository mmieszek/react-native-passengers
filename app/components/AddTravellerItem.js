import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Entypo } from '@expo/vector-icons'
import AvatarPlaceholder from './AvatarPlaceholder'
import PassengerItemContainer from './PassengerItemContainer'

const PassengerItem = ({ description }) => (
  <PassengerItemContainer>
    <AvatarAndContent>
      <AvatarPlaceholder />
      <Info>{description}</Info>
    </AvatarAndContent>
    <Entypo name="chevron-thin-right" size={24} />
  </PassengerItemContainer>
)
const Info = styled.Text`
  margin-left: 20px;
`
const AvatarAndContent = styled.View`
  flex-direction: row;
  align-items: center;
`
PassengerItem.propTypes = {
  description: PropTypes.string.isRequired,
}
export default PassengerItem
