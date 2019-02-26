import React, { Component } from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import AddTravellerHeader from './AddTravellerHeader'
import ScreenContainer from './ScreenContainer'
import Input from './Input'

class AddTraveller extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Welcome',
    header: AddTravellerHeader,
    headerTintColor: '#fff',
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: 'transparent',
    },
    headerRight: (
      <Button
        onPress={navigation.getParam('done') || (() => {})}
        title="Done"
        color="#fff"
      />
    ),
  })

  componentDidMount() {
    const { navigation } = this.props
    navigation.setParams({ done: this.done })
  }

  done = () => {}

  render() {
    return (
      <ScreenContainer>
        <Title>Add New Traveller</Title>
        <Input placeholder="Title" />
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Date of Birth" />
      </ScreenContainer>
    )
  }
}
AddTraveller.propTypes = {
  navigation: PropTypes.object.isRequired,
}
const Title = styled.Text``
export default AddTraveller
