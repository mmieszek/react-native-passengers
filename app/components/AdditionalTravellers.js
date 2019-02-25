import React from 'react'
import PassengerItem from './PassengerItem'

const AdditionalTravellers = ({ additionalPassengers }) =>
  additionalPassengers.map(passenger => <PassengerItem {...passenger} />)

export default AdditionalTravellers
