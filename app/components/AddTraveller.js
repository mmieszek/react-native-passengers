import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import DatePicker from 'react-native-datepicker'

import AddTravellerHeader from './AddTravellerHeader'
import ScreenContainer from './ScreenContainer'
import Input from './Input'
import HeaderRightButton from './HeaderRightButton'

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
      <HeaderRightButton onPress={navigation.getParam('done') || (() => {})} />
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
    this.validate()
  }

  validate = () => {
    const { title, firstName, lastName, dateOfBirth } = this.state
    const { setFormValid } = this.props
    const isValid = title && firstName && lastName && dateOfBirth
    setFormValid(!!isValid)
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

  changeTitle = title => this.setState({ title }, this.validate)

  changeFirstName = firstName => this.setState({ firstName }, this.validate)

  changeLastName = lastName => this.setState({ lastName }, this.validate)

  changeDateOfBirth = dateOfBirth =>
    this.setState({ dateOfBirth }, this.validate)

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
        <DatePicker
          style={{
            width: null,
            backgroundColor: '#f2f2f4',
            height: 50,
            alignSelf: 'stretch',
            borderRadius: 10,
            padding: 5,
            marginTop: 15,
            borderWidth: 0,
          }}
          date={dateOfBirth}
          mode="date"
          showIcon={false}
          placeholder="Date of Birth"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              borderWidth: 0,
              alignItems: 'flex-start',
            },
            placeholderText: {
              color: '#AEAEAF',
            },
          }}
          onDateChange={this.changeDateOfBirth}
        />
      </ScreenContainer>
    )
  }
}
AddTraveller.propTypes = {
  navigation: PropTypes.object.isRequired,
  savePassenger: PropTypes.func.isRequired,
  setFormValid: PropTypes.func.isRequired,
  title: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  avatar: PropTypes.number,
  color: PropTypes.string,
}
const Title = styled.Text``
export default AddTraveller
