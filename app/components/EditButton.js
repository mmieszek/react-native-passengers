import React from 'react'
import { TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const EditButton = ({ onPress = () => {} }) => (
  <TouchableHighlight onPress={onPress} underlayColor="transparent">
    <Button>
      <Label>Edit</Label>
    </Button>
  </TouchableHighlight>
)
const Button = styled.View`
  background-color: #fc4e50;
  height: 40px;
  width: 70px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`
const Label = styled.Text`
  color: white;
`
EditButton.propTypes = {
  onPress: PropTypes.func,
}
export default EditButton
