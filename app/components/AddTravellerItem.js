import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import AvatarPlaceholder from './AvatarPlaceholder'
import PassengerItemContainer from './PassengerItemContainer'

const PassengerItem = ({ description, onNewTraveller }) => (
  <TouchableHighlight
    onPress={onNewTraveller}
    underlayColor="transparent"
    activeOpacity={0.2}>
    <PassengerItemContainer>
      <AvatarAndContent>
        <AvatarPlaceholder />
        <Info>{description}</Info>
      </AvatarAndContent>
      <Entypo name="chevron-thin-right" size={24} />
    </PassengerItemContainer>
  </TouchableHighlight>
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
  onNewTraveller: PropTypes.func.isRequired,
}
export default PassengerItem
