import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StatusBar, View } from 'react-native'
import ScreenContainer from './ScreenContainer'
import PassengerItem from './PassengerItem'
import AdditionalTravellers from './AdditionalTravellers'
import AddTravellerItem from './AddTravellerItem'

class PassengerList extends Component {
  static navigationOptions = {
    headerTitle: "WHO'S TRAVELLING?",
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#596CD4',
    },
  }

  componentDidMount() {
    const { fetchFirstPassenger } = this.props
    fetchFirstPassenger()
  }

  onEdit = () => {
    const { navigation } = this.props
    navigation.navigate('AddPassenger')
  }

  render() {
    const { firstPassenger, additionalPassengers } = this.props
    return (
      <ScreenContainer>
        <StatusBar translucent={false} barStyle="light-content" />
        <View style={{ paddingTop: 20 }}>
          <Text>Main traveller (this must be you, the account holder)</Text>
          {firstPassenger && (
            <PassengerItem {...firstPassenger} onEdit={this.onEdit} />
          )}
          <Text>Additional Travellers</Text>
          {additionalPassengers && (
            <AdditionalTravellers additionalPassengers={additionalPassengers} />
          )}
          <AddTravellerItem description="Enter Adult 2 Information" />
        </View>
      </ScreenContainer>
    )
  }
}

PassengerList.propTypes = {
  fetchFirstPassenger: PropTypes.func.isRequired,
  firstPassenger: PropTypes.object,
  additionalPassengers: PropTypes.object,
}
export default PassengerList
