import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StatusBar, View } from 'react-native'

class PassengerList extends Component {
  componentDidMount() {
    const { fetchFirstPassenger } = this.props
    fetchFirstPassenger()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <View style={{ paddingTop: 20 }}>
          <Text>Passenger List Screen</Text>
        </View>
      </View>
    )
  }
}
PassengerList.propTypes = {
  fetchFirstPassenger: PropTypes.func.isRequired,
}
export default PassengerList
