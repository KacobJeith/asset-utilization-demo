import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as Actions from '../redux/actions'

import { Grid, Paper }   from 'material-ui';

const mapStateToProps = (state) => ({

})


class Tutorials extends React.Component {
  
  render() {

    return (
    <Grid container justify='center' style={{maxWidth: '100%', marginTop: 24, marginBottom: 24}}>
      <Grid item xs={10}>
        <Paper style={{padding: 24}}> 
          <div> Template will go here </div>
        </Paper>
      </Grid>
    </Grid>
    )
	 
  
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tutorials))
