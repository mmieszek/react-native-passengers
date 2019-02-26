import React, { Component } from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import AddTravellerHeader from './AddTravellerHeader'
import ScreenContainer from './ScreenContainer'
import Input from './Input'

class AddTraveller extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ENTER TRAVELLER',
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
    const {
      title,
      firstName,
      lastName,
      dateOfBirth,
      avatar,
      color,
    } = this.props
    this.state = {
      title,
      firstName,
      lastName,
      dateOfBirth,
      avatar,
      color,
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    navigation.setParams({ done: this.done })
  }

  done = () => {
    const { savePassenger, navigation } = this.props
    const {
      firstName,
      lastName,
      title,
      dateOfBirth,
      avatar,
      color,
    } = this.state
    savePassenger(navigation.getParam('type'), {
      firstName,
      lastName,
      title,
      dateOfBirth,
      avatar,
      color,
    })
    navigation.goBack()
  }

  changeTitle = title => this.setState({ title })

  changeFirstName = firstName => this.setState({ firstName })

  changeLastName = lastName => this.setState({ lastName })

  changeDateOfBirth = dateOfBirth => this.setState({ dateOfBirth })

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
  savePassenger: PropTypes.func.isRequired,
  title: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  avatar: PropTypes.number,
  color: PropTypes.string,
}
const Title = styled.Text``
export default AddTraveller
