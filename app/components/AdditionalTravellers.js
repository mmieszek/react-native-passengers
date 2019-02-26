import React from 'react'
import PropTypes from 'prop-types'
import PassengerItem from './PassengerItem'
import AddTravellerItem from './AddTravellerItem'

const AdditionalTravellers = ({ traveller, label, onNewTraveller }) =>
  traveller ? (
    <PassengerItem {...traveller} />
  ) : (
    <AddTravellerItem
      description={`Enter ${label} Information`}
      onNewTraveller={onNewTraveller}
    />
  )
AdditionalTravellers.propTypes = {
  traveller: PropTypes.object,
  label: PropTypes.string.isRequired,
  onNewTraveller: PropTypes.func.isRequired,
}
export default AdditionalTravellers
