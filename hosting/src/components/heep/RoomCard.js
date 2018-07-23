import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../../redux/actions'
import * as database from '../../firebase/FirebaseDatabase'
import {Grid, Row, Col, Image, PageHeader, Media, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import EditTextBox from './../utilities/EditTextBox'

var mapStateToProps = (state, ownProps) => ({
  group: state.groups[ownProps.groupID]
})

class RoomCard extends React.Component {

  render() {

    var inputs = {
      section: {
        key: this.props.group.groupID,
        style: {
          marginTop: 10
        }
      },
      linkButton: {
        bsStyle: "primary",
        bsSize: "small",
        onClick: () => {}
      },
      image: {
        width: 64,
        height: 64,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lost_or_Unknown.svg/1000px-Lost_or_Unknown.svg.png", 
        id: String(this.props.group.groupID),
        alt: "RoomPic" 
      },
      editableText: {
        text: this.props.group.name,
        onChange: (change) => {database.updateGroupName(this.props.group.groupID, change)}
      }
    }

    database.downloadGroupImage(this.props.group.groupID);
    
    return (
<Row {...inputs.section}>
  <Col xsOffset={1}>
    <Media >
     <Media.Left>
        <img {...inputs.image}/>
      </Media.Left>
      <Media.Body>
        <h1><small>
          <EditTextBox {...inputs.editableText}/>
        </small></h1>
      </Media.Body>
    </Media>
  </Col>
</Row>);

  }
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoomCard))

