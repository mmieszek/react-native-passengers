import { connect } from 'react-redux'
import PassengerList from '../components/PassengerList'
import { fetchFirstPassenger } from '../actions/passengerListActions'

function mapStateToProps(state) {
  return {
    firstPassenger: state.passengers.first,
    allPassengers: state.passengers,
    // Make trip configuration dynamic as this data comes from
    // previous screen not in the scope of this technical test.
    group: [
      { type: 'adult2', label: 'Adult 2' },
      { type: 'adult3', label: 'Adult 3' },
      { type: 'child1', label: 'Child 1' },
    ],
  }
}
const mapDispatchToProps = {
  fetchFirstPassenger,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PassengerList)
