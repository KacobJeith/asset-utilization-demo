import React from "react";

import { withStyles } from "material-ui/styles";

import { Typography,
         Modal,
         Button,
         Grid,
         Avatar } from 'material-ui'

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class TeamModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  bioText(bioText) {
    return (
      <Typography style={{
          paddingTop: 16
        }} variant="subheading">
          {bioText}
      </Typography>
    )
  };

  nameSubheading() {
    return (
      <Typography variant="subheading" align='center'>
          {this.props.name}
      </Typography>
    )
  };

  nameTitle() {
    return (
      <Typography variant="title" align="center" paragraph>
        {this.props.name}
      </Typography>
    )
  };

  buttonImage() {
    const inputs = {
      buttonContainer: {
        style: {
          textAlign: 'center'
        }
      },
      buttonImage: {
        src: this.props.imagePath,
        style: {
          width: 200,
          height: 200
        }
      },
    }

    return (
      <div {...inputs.buttonContainer}>
        <Button onClick={this.handleOpen}>
          <Avatar {...inputs.buttonImage}/>
        </Button>
      </div>
    )
  };

  modalImage() {
    const inputs = {
      modalImageContainer: {
        style: {
          paddingTop: 16,
          textAlign: 'center'
        }
      },
      modalImage: {
        src: this.props.imagePath,
        style: {
          width: 200,
          height: 200
        }
      },
    }

    return (
      <Grid container justify='center'>
        <Grid item>
          <Avatar {...inputs.modalImage}/>
        </Grid>
      </Grid>
    )
  };

  render() {
    const { classes } = this.props;

    const inputs = {
      gridContainer: {
        style: {
          height: '100%',
          width: '100%',
          overflowX: 'hidden',
          outline: 'none',
          margin: 0
        }
      },
    };

    return (
      <div>
        {this.buttonImage()}
        {this.nameSubheading()}
            <Modal
              open={this.state.open}
              onClose={this.handleClose}>
              <Grid
                container {...inputs.gridContainer}
                justify='center'
                alignItems='center'
                onClick={this.handleClose}>
                <Grid item xs={12} sm={6} style={{maxHeight: '90%'}}>
                  <div style={{position: 'relative'}} className={classes.paper}>
                    {this.nameTitle()}
                    {this.modalImage()}
                    {this.bioText(this.props.desc1)}
                    {this.bioText(this.props.desc2)}
                  </div>
                </Grid>
              </Grid>
            </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(TeamModal);
