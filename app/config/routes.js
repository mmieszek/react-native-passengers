import { createStackNavigator } from 'react-navigation'

import PassengersContainer from '../screens/PassengersContainer'
import AddTravellerContainer from '../screens/AddTravellerContainer'
import AddTravellerHeader from '../components/AddTravellerHeader'

export default createStackNavigator(
  {
    Home: {
      screen: PassengersContainer,
      navigationOptions: {
        headerTitle: "WHO'S TRAVELLING?",
        headerTintColor: '#fff',
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: '#596CD4',
        },
      },
    },
    AddPassenger: {
      screen: AddTravellerContainer,
      navigationOptions: {
        header: AddTravellerHeader,
        headerTintColor: '#fff',
        title: 'ENTER TRAVELLER',
        headerStyle: {
          borderBottomWidth: 0,
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    headerMode: 'screen',
  },
)
