import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Input = ({ placeholder, value, onChangeText }) => (
  <TextInput
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
    placeholderTextColor="#AEAEAF"
    autoCapitalize="none"
    autoCorrect={false}
    underlineColorAndroid="transparent"
    textDecorationLine="none"
    textAlign="left"
    spellCheck={false}
  />
)
const TextInput = styled.TextInput`
  background-color: #f2f2f4;
  height: 50px;
  align-self: stretch;
  border-radius: 10px;
  padding: 5px;
  margin-top: 15px;
`
Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
}
export default Input
