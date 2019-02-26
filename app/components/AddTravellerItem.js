import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import AvatarPlaceholder from './AvatarPlaceholder'

const PassengerItem = ({ description }) => (
  <Container>
    <AvatarPlaceholder />
    <Info>{description}</Info>
  </Container>
)
const Container = styled.View`
  flex-direction: row;
`
const Info = styled.Text``
PassengerItem.propTypes = {
  description: PropTypes.string.isRequired,
}
export default PassengerItem
