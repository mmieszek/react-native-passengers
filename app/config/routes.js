import { createStackNavigator } from 'react-navigation'

import PassengersContainer from '../screens/PassengersContainer'
import AddTravellerContainer from '../screens/AddTravellerContainer'

export default createStackNavigator(
  {
    Home: {
      screen: PassengersContainer,
    },
    AddPassenger: {
      screen: AddTravellerContainer,
    },
  },
  {
    headerMode: 'screen',
  },
)
