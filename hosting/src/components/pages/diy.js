import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withTheme } from 'material-ui/styles';
import * as Actions from '../../redux/actions'

import { Grid, Paper, Typography } from 'material-ui'

import SectionCard from '../utilities/SectionCard'
import VideoBackgroundCard from '../utilities/VideoBackgroundCard'
import ContactUsSection from '../utilities/ContactUsSection'
import { banners } from '../../assets/remote/Banners'
import { logPageView } from '../../GoogleAnalytics'

var mapStateToProps = (state) => ({
});

class DIY extends React.Component {

  componentDidMount() {
    logPageView()
  }

  topBanner() {

      const inputs = {
        backgroundColor: 'black',
        //TO-DO: Purchase video
        imagePath: banners.paperSignals,
        minHeight: 500,
      }

      return(
        SectionCard(inputs,
          <Grid container direction='column' justify ='center' alignItems ='center' style={{
            width: '100%',
            minHeight: inputs.minHeight,
            margin: '0 auto',
            backgroundColor: 'rgba(0,0,0,0.25)'
          }}>
            <Grid item xs={12} sm={8}>
              <Typography variant='display1' align='center' style={{color:'white'}}>
                Heep <span style={{color: '#00adee'}}>&#9829;</span> Open Source
              </Typography>
            </Grid>

{/*             <Grid item xs={12} sm={8}> */}
{/*               <Typography variant='subheading' align='center' style={{color:'#bbbbbb'}}> */}
{/*                 Enchanted, Connected, Accessible Technology for Humans */}
{/*               </Typography> */}
{/*  */}
{/*             </Grid> */}
          </Grid>
        )
      )
    };

  stayTuned() {

    const inputs = {
      paddingTop: 25,
      paddingBottom: 25,
      backgroundColor: 'white'
    };
    return(
      SectionCard(inputs,
        <Grid container justify ='center' alignItems='center' spacing={24} style={{
          maxWidth: '100%',
          minHeight: inputs.minHeight,
          paddingTop: this.props.theme.spacing.unit * 5,
          paddingBottom: this.props.theme.spacing.unit * 5,
          margin: '0 auto'
        }}>
          <Grid item xs={8}>
                <Typography variant='display1' align='center' paragraph>
                  We are excited to see what you create with Heep.
                </Typography>

                <Typography variant='display1' align='center' paragraph>
                  Stay tuned for an announcement soon!
                </Typography>
          </Grid>
        </Grid>
      )
    )
  }

  render() {


    return (
      <div>
        {this.topBanner()}
        {this.stayTuned()}
        <ContactUsSection />
      </div>
      );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTheme()(DIY)))
