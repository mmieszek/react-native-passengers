import { connect } from 'react-redux'
import PassengerList from '../components/PassengerList'
import { fetchFirstPassenger } from '../actions/passengerListActions'

function mapStateToProps(state) {
  return {
    firstPassenger: state.passengers.all.first,
    allPassengers: state.passengers.all,
    group: state.passengers.configuration,
  }
}
const mapDispatchToProps = {
  fetchFirstPassenger,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PassengerList)
