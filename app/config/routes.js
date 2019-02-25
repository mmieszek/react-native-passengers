import { createStackNavigator } from 'react-navigation'

import PassengersContainer from '../screens/PassengersContainer'

export default createStackNavigator(
  {
    Home: {
      screen: PassengersContainer,
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
