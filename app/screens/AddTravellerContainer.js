import { connect } from 'react-redux'
import AddTraveller from '../components/AddTraveller'
import { savePassenger } from '../actions/passengerListActions'

function mapStateToProps(state, props) {
  const traveller = state.passengers.all[props.navigation.getParam('type')]
  return {
    ...traveller,
  }
}
const mapDispatchToProps = {
  savePassenger,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTraveller)
