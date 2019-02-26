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

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    navigation.setParams({ done: this.done })
  }

  done = () => {}

  changeTitle = ({ title }) => this.setState({ title })

  changeFirstName = ({ firstName }) => this.setState({ firstName })

  changeLastName = ({ lastName }) => this.setState({ lastName })

  changeDateOfBirth = ({ dateOfBirth }) => this.setState({ dateOfBirth })

  render() {
    const { title, firstName, lastName, dateOfBirth } = this.state
    return (
      <ScreenContainer>
        <Title>Add New Traveller</Title>
        <Input
          placeholder="Title"
          value={title}
          onChangeText={this.changeTitle}
        />
        <Input
          placeholder="First Name"
          value={firstName}
          onChangeText={this.changeFirstName}
        />
        <Input
          placeholder="Last Name"
          value={lastName}
          onChangeText={this.changeLastName}
        />
        <Input
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChangeText={this.changeDateOfBirth}
        />
      </ScreenContainer>
    )
  }
}
AddTraveller.propTypes = {
  navigation: PropTypes.object.isRequired,
}
const Title = styled.Text``
export default AddTraveller
