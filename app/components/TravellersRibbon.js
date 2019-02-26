import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import Avatar from './Avatar'

const TravellersRibbon = ({ travellers }) => (
  <Container>
    <Text>Choose from friends, or add new traveller</Text>
    <Ribbon horizontal>
      {travellers &&
        travellers.map(traveller => (
          <AvatarWithName key={traveller.type}>
            <Avatar avatarNumber={traveller.avatar} color={traveller.color} />
            <Text>{traveller.firstName}</Text>
          </AvatarWithName>
        ))}
    </Ribbon>
  </Container>
)

const Text = styled.Text`
  color: white;
`
const Container = styled.View`
  padding-horizontal: 20px;
`
const AvatarWithName = styled.View`
  align-items: center;
  margin-right: 15px;
`
const Ribbon = styled.ScrollView`
  flex-direction: row;
  margin-top: 20px;
`
TravellersRibbon.propTypes = {
  travellers: PropTypes.arrayOf(PropTypes.object).isRequired,
}
function mapStatToProps(state) {
  return {
    travellers: [{ type: 'first' }, ...state.passengers.configuration]
      .filter(configItem => state.passengers.all[configItem.type])
      .map(configItem => ({
        ...state.passengers.all[configItem.type],
        type: configItem.type,
      })),
  }
}
export default connect(mapStatToProps)(TravellersRibbon)
