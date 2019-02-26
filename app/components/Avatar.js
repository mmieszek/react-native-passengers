import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import avatars from '../util/avatars'

const Avatar = ({ avatarNumber, color }) => (
  <Container color={color}>
    <Image source={avatars[avatarNumber]} resizeMode="contain" />
  </Container>
)
const Container = styled.View`
  height: 60px;
  width: 60px;
  border-width: 3px;
  border-color: ${props => props.color};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`
const Image = styled.Image`
  height: 40px;
  width: 40px;
`
Avatar.propTypes = {
  avatarNumber: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}
export default Avatar
