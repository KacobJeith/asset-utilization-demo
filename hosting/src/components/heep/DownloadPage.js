import React                  from 'react';
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter }         from 'react-router-dom'
import PropTypes              from 'prop-types';

import Paper                                        from 'material-ui/Paper';
import Grid                                         from 'material-ui/Grid';
import GridList, { GridListTile, GridListTileBar }  from 'material-ui/GridList';
import IconButton                                   from 'material-ui/IconButton';
import Typography                                   from 'material-ui/Typography';
import Button                                       from 'material-ui/Button'
import Hidden                                       from 'material-ui/Hidden';

import FileDownload  from 'material-ui-icons/FileDownload';
import ArrowForward  from 'material-ui-icons/ArrowForward';

import * as actions from '../../redux/actions'


var mapStateToProps = (state, ownProps) => ({
})


class DownloadPage extends React.Component {

  downloadButton(text, url) {
    return (
      <Button
        variant='raised'
        color='primary'
        size='large'
        onClick={()=>{window.open(url)}}
      >
        <FileDownload
          style={{
            marginRight: 10
          }}
        />
        {text}
      </Button>
    )
  }

  downloadDescription() {
    return (
      <div>
        <Typography
          variant="display2"
          gutterBottom
        >Download Heep App</Typography>
        <Typography
          variant='body1'
          paragraph>
          Build responsive, local-first control systems with the world's most powerful networking library.
        </Typography>
        <Typography
          variant='body1'
          paragraph>
          Heep is a protocol for developing responsive local networks. From Smart Homes to Vertical Farms, Heep powered embedded devices
          are the robust, secure, performant backbone for your creations. Download the Heep App to link data sources (switches, sensors)
          to data outputs (screens, lights, motors, and more). Start enchanting your world.
        </Typography>
      </div>
    )
  }

  outboundLink() {

    return (
      <a href='https://heep-io.atlassian.net/wiki/spaces/DIYDEVDOCS/pages/496468058/Intro+to+Heep+OS' target="_blank">
        <Button
          variant='flat'
          color='primary'
          size='large'
        >
          Go to Docs
          <ArrowForward
            style={{
              marginLeft: 10
            }}
          />
        </Button>
      </a>
    )
  }

  render() {

    return (
      <div
        style={{
          margin: 20,
          maxWidth: '100%',
          overflowX: 'hidden',
          overflowY: 'hidden'
        }}
      >
        <Grid
          container
          spacing={24}
          justify={'center'}
          alignItems={'center'}>
          <Hidden smUp>
            <Grid
              item
              md={3}
              lg={2}
              sm={4}
              xs={5}>
              <img
                src="../src/assets/Heep_Gradient.png"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}/>
            </Grid>
          </Hidden>
          <Grid
            item
            sm={6}
            xs={10}>
            {this.downloadDescription()}

            <Grid container spacing={8}>
              <Grid item>
                {this.downloadButton('Download Mac', 'https://github.com/HeepIO/HeepDesktop/releases/download/v0.1.0/HeepDesktop-0.1.0.dmg')}

              </Grid>
              <Grid item>
                {this.downloadButton('Download Windows', 'https://github.com/HeepIO/HeepDesktop/releases/download/v0.1.0/HeepDesktop.Setup.0.1.0.exe')}
              </Grid>
            </Grid>

          </Grid>

          <Hidden only='xs'>
            <Grid
              item
              md={3}
              lg={2}
              sm={4}
              xs={5}>
              <img
                src="../src/assets/Heep_Gradient.png"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}/>
            </Grid>
          </Hidden>

        </Grid>

        <Grid container justify='flex-end' >
          <Grid item xs={12} style={{height:100}}/>

          <Grid item xs={3}>
            {this.outboundLink()}
          </Grid>
        </Grid>
      </div>
    );

  }

}


var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DownloadPage))
