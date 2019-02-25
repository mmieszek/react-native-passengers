import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const PassengerItem = ({ firstName, lastName }) => (
  <Container>
    <Info>
      {firstName} {lastName}
    </Info>
  </Container>
)
const Container = styled.View``
const Info = styled.Text``
PassengerItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}
export default PassengerItem
