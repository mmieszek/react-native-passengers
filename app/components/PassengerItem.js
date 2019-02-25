import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import Avatar from './Avatar'

const PassengerItem = ({ firstName, lastName }) => (
  <Container>
    <Avatar />
    <Info>
      {firstName} {lastName}
    </Info>
  </Container>
)
const Container = styled.View`
  flex-direction: row;
`
const Info = styled.Text``
PassengerItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}
export default PassengerItem
