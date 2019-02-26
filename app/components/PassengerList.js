import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StatusBar, View } from 'react-native'
import styled from 'styled-components/native'
import PassengerItem from './PassengerItem'
import AdditionalTravellers from './AdditionalTravellers'
import AddTravellerItem from './AddTravellerItem'

class PassengerList extends Component {
  componentDidMount() {
    const { fetchFirstPassenger } = this.props
    fetchFirstPassenger()
  }

  render() {
    const { firstPassenger, additionalPassengers } = this.props
    return (
      <Container>
        <StatusBar translucent={false} barStyle="default" />
        <View style={{ paddingTop: 20 }}>
          <Text>Main traveller (this must be you, the account holder)</Text>
          {firstPassenger && <PassengerItem {...firstPassenger} />}
          <Text>Additional Travellers</Text>
          {additionalPassengers && (
            <AdditionalTravellers additionalPassengers={additionalPassengers} />
          )}
          <AddTravellerItem description="Enter Adult 2 Information" />
        </View>
      </Container>
    )
  }
}
const Container = styled.View`
  flex: 1;
  padding-horizontal: 20px;
`
PassengerList.propTypes = {
  fetchFirstPassenger: PropTypes.func.isRequired,
  firstPassenger: PropTypes.object,
  additionalPassengers: PropTypes.object,
}
export default PassengerList
