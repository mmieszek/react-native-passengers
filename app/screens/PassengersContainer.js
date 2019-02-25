import { connect } from 'react-redux'
import PassengerList from '../components/PassengerList'
import { fetchFirstPassenger } from '../actions/passengerListActions'

const mapDispatchToProps = {
  fetchFirstPassenger,
}
export default connect(
  null,
  mapDispatchToProps,
)(PassengerList)
