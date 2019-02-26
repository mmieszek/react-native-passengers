import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import EditButton from './EditButton'

const PassengerItem = ({ firstName, lastName }) => (
  <Container>
    <Avatar />
    <Info>
      {firstName} {lastName}
    </Info>
    <EditButton />
  </Container>
)
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 20px;
`
const Info = styled.Text``
PassengerItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}
export default PassengerItem
