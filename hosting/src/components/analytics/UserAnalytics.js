import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../../redux/actions'
import {Grid, Row, Col, Image, PageHeader, Media, Button} from 'react-bootstrap'

import PlaceCard from '../heep/PlaceCard'
import RoomCard from '../heep/RoomCard'
import DeviceCard from '../heep/DeviceCard'

var mapStateToProps = (state) => ({
  devices: state.devices,
  places: state.places,
  groups: state.groups
})

class UserAnalytics extends React.Component {

  createPlaceCards() {
    var places = [];

    for (var placeID in this.props.places) {

      places.push(<PlaceCard placeID={placeID} key={placeID}/>)
    }

    return places

  }

  createRoomCards() {
    var rooms = [];

    for (var groupID in this.props.groups) {

      rooms.push(<RoomCard groupID={groupID} key={groupID}/>)
    }

    return rooms

  }

  createDeviceCards() {
    var devices = [];

    for (var deviceID in this.props.devices) {

      devices.push(<DeviceCard deviceID={deviceID} key={deviceID}/>)
    }

    return devices

  }

  render() {

    return (
<Row>
  <Col md={4}>
    <PageHeader>Places</PageHeader>
    {this.createPlaceCards()}
  </Col>
  <Col md={4}>
    <PageHeader>Rooms</PageHeader>
    {this.createRoomCards()}
  </Col>
  <Col md={4}>
    <PageHeader>Devices</PageHeader> 
    {this.createDeviceCards()}
  </Col>
</Row>

    );  
  }
  
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserAnalytics))

