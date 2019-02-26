import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StatusBar, View } from 'react-native'
import ScreenContainer from './ScreenContainer'
import PassengerItem from './PassengerItem'
import AdditionalTravellers from './AdditionalTravellers'

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
    navigation.navigate('AddPassenger', { type: 'first' })
  }

  onNewTraveller = type => () => {
    const { navigation } = this.props
    navigation.navigate('AddPassenger', { type })
  }

  render() {
    const { firstPassenger, allPassengers, group } = this.props
    return (
      <ScreenContainer>
        <StatusBar translucent={false} barStyle="light-content" />
        <View style={{ paddingTop: 20 }}>
          <Text>Main traveller (this must be you, the account holder)</Text>
          {firstPassenger && (
            <PassengerItem {...firstPassenger} onEdit={this.onEdit} />
          )}
          <Text>Additional Travellers</Text>
          {group.map(traveller => (
            <AdditionalTravellers
              key={traveller.type}
              traveller={allPassengers[traveller.type]}
              label={traveller.label}
              onNewTraveller={this.onNewTraveller(traveller.type)}
            />
          ))}
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
