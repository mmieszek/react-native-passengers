import React from 'react'
import styled from 'styled-components/native'
import { Header } from 'react-navigation'
import { LinearGradient } from 'expo'

const AddTravellerHeader = props => (
  <Container colors={['#EF4B4D', '#F8755C']} start={[0, 0]} end={[1, 1]}>
    <Header {...props} />
  </Container>
)
const Container = styled(LinearGradient)`
  height: 200px;
`
export default AddTravellerHeader
