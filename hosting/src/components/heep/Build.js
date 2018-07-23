import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../../redux/actions'

var mapStateToProps = (state) => ({
	webGLStatus: state.webGLStatus,
  loginStatus: state.loginStatus
})

class Build extends React.Component {

  componentDidMount() {

    if (this.props.loginStatus) {
      var webgl = document.getElementById("webgl");
      webgl.style.display = "inherit";

      if (!this.props.webGLStatus) {

        initializeUnity();
        this.props.updateWebGLStatus(true);

      }
    }
  }

  componentWillUnmount() {
    var webgl = document.getElementById("webgl");
    webgl.style.display = "none";
  }
  
  render() {

    if (this.props.loginStatus) {

      return null

    } else {

      return <div> Log in or Create an Account to Use Heep </div>
    }
  }
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Build))

