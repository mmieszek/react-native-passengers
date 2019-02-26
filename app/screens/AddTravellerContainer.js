import { connect } from 'react-redux'
import AddTraveller from '../components/AddTraveller'
import { savePassenger } from '../actions/passengerListActions'

function mapStateToProps() {
  return {}
}
const mapDispatchToProps = {
  savePassenger,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTraveller)
