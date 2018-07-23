import React from 'react';

import { withStyles } from 'material-ui/styles';

import { Paper, Typography, Grid } from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    height: 'calc(100% - 32px)',
    margin: 0,
  }),
});

class AboutCard extends React.Component {
  constructor(props) {
    super(props);
  };

  imageAbout() {
    const inputs = {
      imageContainer: {
        style: {
          textAlign: 'center'
        }
      },
      imageAbout: {
        src: this.props.imagePath,
        style: {
          maxWidth: '60%',
          maxHeight: '60%',
        }
      },
    };

    return(
      <div {...inputs.imageContainer}>
        <img {...inputs.imageAbout}/>
      </div>
    )
  };

  titleAbout() {
    return (
      <Typography style={{paddingTop: 16}}
        variant="headline" component="headline"
        align="center">
          {this.props.title}
      </Typography>
    )
  };

  descAbout() {
    return (
      <Typography style={{paddingTop: 16}}
        component="p">
          {this.props.desc}
      </Typography>
    )
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} style={{
        elevation: 10
      }}>
        {this.imageAbout()}
        {this.titleAbout()}
        {this.descAbout()}
      </Paper>

    )
  }
}

export default withStyles(styles)(AboutCard)
