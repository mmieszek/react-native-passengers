import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import EditButton from './EditButton'
import PassengerItemContainer from './PassengerItemContainer'

const PassengerItem = ({
  firstName,
  lastName,
  title,
  dateOfBirth,
  onEdit = () => {},
}) => (
  <PassengerItemContainer>
    <AvatarAndContent>
      <Avatar />
      <Content>
        <Info>
          {firstName} {lastName}
        </Info>
        <Info>
          {title}, {dateOfBirth}
        </Info>
      </Content>
    </AvatarAndContent>
    <EditButton onPress={onEdit} />
  </PassengerItemContainer>
)

const Info = styled.Text``
const Content = styled.View`
  margin-left: 20px;
  justify-content: center;
`
const AvatarAndContent = styled.View`
  flex-direction: row;
`
PassengerItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
}
export default PassengerItem
