import { createStackNavigator } from 'react-navigation'

import PassengersContainer from '../screens/PassengersContainer'
import AddTravellerContainer from '../screens/AddTravellerContainer'

export default createStackNavigator(
  {
    Home: {
      screen: PassengersContainer,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
    AddPassenger: {
      screen: AddTravellerContainer,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
  },
  {
    headerMode: 'screen',
  },
)
