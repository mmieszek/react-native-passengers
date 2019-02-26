import React from 'react'
import PropTypes from 'prop-types'
import PassengerItem from './PassengerItem'
import AddTravellerItem from './AddTravellerItem'

const AdditionalTravellers = ({
  traveller,
  label,
  onEditAdditionalTraveller,
}) =>
  traveller ? (
    <PassengerItem {...traveller} onEdit={onEditAdditionalTraveller} />
  ) : (
    <AddTravellerItem
      description={`Enter ${label} Information`}
      onNewTraveller={onEditAdditionalTraveller}
    />
  )
AdditionalTravellers.propTypes = {
  traveller: PropTypes.object,
  label: PropTypes.string.isRequired,
  onEditAdditionalTraveller: PropTypes.func.isRequired,
}
export default AdditionalTravellers
