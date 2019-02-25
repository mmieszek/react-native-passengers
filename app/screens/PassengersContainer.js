import { connect } from 'react-redux'
import PassengerList from '../components/PassengerList'
import { fetchFirstPassenger } from '../actions/passengerListActions'

function mapStateToProps(state) {
  return {
    firstPassenger: state.passengers.first,
  }
}
const mapDispatchToProps = {
  fetchFirstPassenger,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PassengerList)
