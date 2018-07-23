import React from 'react';
import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import { withRouter }         from 'react-router-dom'

import * as Actions         from '../../redux/actions'

import { TimelineMax } from 'gsap';
import { withStyles } from 'material-ui/styles';
import { Typography,
         Paper } from 'material-ui'

var mapStateToProps = (state) => ({
  svgText: state.svgText
})

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
});

class ExplainSVG extends React.Component {

  startingText() {
    return (
      <div>
        <Typography variant="title" paragraph>
          Welcome to the Heep Room!
        </Typography>
        <Typography variant="subheading" paragraph>
          We've imagined a future where connected devices work seamlessly and unintrusively. Heep makes it easy to build,
          <br/><br/>
          Click around and take a look!
        </Typography>
      </div>
    )
  };

  carText() {
    return (
      <Typography variant="title" paragraph>
        Vroooooommmmm!
      </Typography>
    )
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={3}>
        {this.props.svgText=='starting' && (this.startingText())}
        {this.props.svgText=='car' && (this.carText())}
      </Paper>
    )
  };
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExplainSVG)))
