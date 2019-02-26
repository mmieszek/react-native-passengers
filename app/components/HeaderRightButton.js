import React from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const HeaderRightButton = ({ showDone, onPress }) =>
  showDone ? <Button onPress={onPress} title="Done" color="#fff" /> : null

function mapStateToProps(state) {
  return {
    showDone: state.passengers.formValid,
  }
}
HeaderRightButton.propTypes = {
  showDone: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
}
export default connect(mapStateToProps)(HeaderRightButton)
