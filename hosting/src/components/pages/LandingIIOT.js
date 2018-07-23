import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import * as Actions from '../../redux/actions'
import { HashLink } from "react-router-hash-link";
import { logPageView } from '../../GoogleAnalytics'

import { Grid, Paper, Typography, Button, Avatar } from 'material-ui'
import Memory from 'material-ui-icons/Memory'
import DesktopWindows from 'material-ui-icons/DesktopWindows'
import ArrowForward from 'material-ui-icons/ArrowForward'
import SettingsInputComponent from 'material-ui-icons/SettingsInputComponent'
import Equalizer from 'material-ui-icons/Equalizer'
import VerifiedUser from 'material-ui-icons/VerifiedUser'
import Code from 'material-ui-icons/Code'

import SectionCard from '../utilities/SectionCard'
import AboutCard from '../about/AboutCard'
import CollectionPreview from '../utilities/CollectionPreview'
import VideoBackgroundCard from '../utilities/VideoBackgroundCard'
import { banners } from '../../assets/remote/Banners'
import videos from '../../assets/remote/videos.json'
import photos from '../../assets/remote/photos.json'
import { svgs } from '../../assets/remote/SVGs'
import ContactUsSection from '../utilities/ContactUsSection'

import SplitSectionCard from '../utilities/SplitSectionCard'
import assets from '../../assets/remote/general.json'
import HowItWorks from './HowItWorks'


const titleVariant = 'title';
const titleAlign = 'center';

var mapStateToProps = (state) => ({
});

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    height: 'calc(100% - 32px)',
    margin: 0,
  }),
});

class LandingIIOT extends React.Component {

  componentDidMount() {
    logPageView()
  }

  render() {
    const inputs = {
      quote1: `From the smallest embedded chip, to lightning fast gaming PCs,
                  Heep unlocks immersive, living, tangibly magical experiences.`,
      quote2: ``
    }

    const blurbs = [
      // {
      //   title: 'Commercial Applications',
      //   link: 'missionChinese',
      //   moreInfoLink: {
      //     text: 'Learn More',
      //     link: '/Business'
      //   }
      // },
      {
        title: 'Heep for Enterprise',
        link: 'interoperability',
        moreInfoLink: {
          text: 'Learn More',
          link: '/Technology#top'
        }
      },
      // {
      //   title: 'Heep for Everyone',
      //   link: 'paperSignals',
      //   moreInfoLink: {
      //     text: 'Learn More',
      //     link: '/diy'
      //   }
      // }
    ]

    return (
      <div>
        {this.topBanner()}
{/*         {this.iiotCollection()} */}
        <HowItWorks/>
{/*         {this.heepTechnology()} */}
{/*         {this.productLanding()} */}
        {this.bigQuote(inputs.quote1)}
        {blurbs.map((sectionInfo, index) => {
          return this.splitSectionWithBlurb(sectionInfo, index % 2 == 0 ? 'left' : 'right')
        })}
        <ContactUsSection />
      </div>
      );
  }

  topBanner() {

      const inputs = {
        backgroundColor: 'black',
        //TO-DO: Purchase video
        videoSrc: videos.industry,
        minHeight: 400,
        overlayColor: 'rgba(0,0,0, 0.7)'
      }

      return(
        VideoBackgroundCard(inputs,
          <Grid container direction='column' justify ='center' alignItems ='center' style={{
            width: '100%',
            minHeight: inputs.minHeight,
            margin: '0 auto'
          }}>
            <Grid item xs={12} sm={8}>
              <Typography variant='display1' align='center' style={{color:'white'}}>
                Edge As A Service
              </Typography>
            </Grid>

            <Grid item xs={12} sm={8}>
              <Typography variant='subheading' align='center' style={{color:'#bbbbbb'}}>
                Augment your offering by leveraging the power of the Edge
              </Typography>

            </Grid>

            <Grid item xs={12}>
              <Grid container justify='center' alignItems='center'>
                <HashLink
                  smooth
                  to={'/Technology#top'}
                  style={{
                    textDecoration: 'none',
                    outline: 'none',
                    marginTop: this.props.theme.spacing.unit * 2
                  }}
                >
                <Button variant='raised' color='secondary' style={{ textTransform: "capitalize"}}>
                    Learn More
                  </Button>
                </HashLink>
              </Grid>
            </Grid>
          </Grid>
        )
      )
    };

  technologyPaper(title, desc, image) {
    const { classes } = this.props;

    return (
      <Grid item xs={12} md={4}>
        <Paper className={classes.root} style={{
          elevation: 10
        }}>
          <div style={{textAlign: 'center', display: 'block'}}>
            {image}
          </div>
          <Typography
            variant="headline" component="headline"
            align="center"
            style={{paddingTop: 24, paddingBottom: 8}}>
              {title}
          </Typography>
          <Typography component="p">
            {desc}
          </Typography>
        </Paper>
      </Grid>
    )
  }

  heepTechnology() {
    const inputs = {
      OS: {
        title: 'Heep OS',
        // imagePath: svgs.cloudLess,
        desc: ` The Heep OS is a memory sharing distributed operating system and control system.
                It is designed to require the smallest possible footprint on any member device.
                `
      },
      API: {
        title: 'Heep API (HAPI)',
        // imagePath: svgs.deviceParty,
        desc: `
                HAPI is a local first IoT protocol designed for speed and reliability.
                All communication is distilled into simple input/output relationships.
                Connecting devices is as simple as loading a front end, and wiring two devices together in software.
                `
      },
      hardware: {
        title: 'Heep Hardware',
        // imagePath: 'https://docs.particle.io/assets/images/raspberry-pi.svg',
        desc: ` We designed the Heep Core from first principles so that no electronic device is excluded, no matter what physical layer the device talks over.
                In concert with the Heep OS and HAPI, our products achieve maximum performance at application optimized costs.
                `
      }
    }

    const iconStyle = {
      color: 'primary',
      style: {
        width: 100,
        height: 100
      }
    }


    return (
          SectionCard({},
            <Grid container justify ='center' alignItems='center' spacing={24} style={{
              maxWidth: '100%',
              minHeight: inputs.minHeight,
              paddingTop: this.props.theme.spacing.unit * 5,
              paddingBottom: this.props.theme.spacing.unit * 5,
              margin: '0 auto'
            }}>
              <Grid item xs={12} sm={10}>
                <Typography variant='display1' align='center' paragraph>
                  Our Technology
                </Typography>
                <Grid container style={{
                    maxWidth:'100%',
                    overflowX: 'hidden',
                    margin: '0 auto'
                  }} spacing={24} justify='center' alignItems='stretch'
                >
                  {this.technologyPaper(inputs.OS.title, inputs.OS.desc, <DesktopWindows {...iconStyle}/>)}
                  {this.technologyPaper(inputs.API.title, inputs.API.desc, <Code {...iconStyle}/>)}
                  {this.technologyPaper(inputs.hardware.title, inputs.hardware.desc, <Memory {...iconStyle}/>)}
                </Grid>
              </Grid>
            </Grid>
          )
        )
  };

  productLanding() {
    const inputs = {
      padding: 20,
      background: 'linear-gradient(to bottom, #fff, #B0BEC5)'
    }

    const productStyles = {
      grid: {
        style: {
          display: 'block',
          textAlign: 'center'
        }
      },
      product: {
        style: {
          maxWidth: 200
        }
      }
    }

    return (
      SectionCard(inputs,
        <Grid container justify='center' style={{maxWidth: '100%', margin: 0}}>
          <Grid item sm={4} md={3} {...productStyles.grid}>
            <img src={photos.RFID} {...productStyles.product}/>
          </Grid>
          <Grid item sm={4} md={3} {...productStyles.grid}>
            <img src={photos.MagLockStraight} {...productStyles.product}/>
          </Grid>
          <Grid item sm={4} md={3} {...productStyles.grid}>
            <img src={photos.PlaygroundAndShield} {...productStyles.product}/>
          </Grid>
        </Grid>
      )
    )
  }

  bigQuote(quote) {
    const fontSize = 36

    const inputs = {
      sectionInputs: {
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: '#B0BEC5'
      },
      icon: {
        color: 'primary',
        style: {
          width: 100,
          height: 100
        }
      }
    };


    return(
      SectionCard(inputs.sectionInputs,
        <Grid container justify ='center' alignItems='center' spacing={24} style={{
          maxWidth: '100%',
          minHeight: inputs.minHeight,
          // paddingTop: this.props.theme.spacing.unit * 5,
          // paddingBottom: this.props.theme.spacing.unit * 5,
          margin: '0 auto'
        }}>
          <Grid item xs={6}>
                <Typography variant='subheading' align='center' paragraph style={{fontSize: '1.8rem'}}>
                  {quote}
                </Typography>
          </Grid>
        </Grid>
      )
    )
  }


  splitSectionWithBlurb(sectionInfo, orientation) {
    const inputs = {
      imageSide: orientation,
      minHeight: 400,
      imagePath: assets[sectionInfo.link]
    };

    return (
      SplitSectionCard(inputs,
        <Grid container id={sectionInfo.link} style={{
          maxWidth:'100%',
          margin: '0 auto'
         }}
         justify='center' alignItems='center' key={sectionInfo.title}>
          <Grid item  xs={12} md={10}>
            <Typography variant={titleVariant} align={titleAlign}>
              {sectionInfo.title}
            </Typography>

            <Typography variant='body1' align='left' style={{color: '#999'}}>

            </Typography>

          </Grid>
          {sectionInfo.moreInfoLink && (
            <Grid item xs={12}>
              <Grid container justify='center' alignItems='center'>
                <HashLink
                  smooth
                  to={sectionInfo.moreInfoLink.externalLink ?
                    'IndustrialHeep' :
                    sectionInfo.moreInfoLink.link}
                  style={{
                    textDecoration: 'none',
                    outline: 'none'
                  }}
                >
                <Button variant='flat' color='secondary' style={{ textTransform: "capitalize"}}
                  onClick={sectionInfo.moreInfoLink.externalLink ?
                    () => window.open(sectionInfo.moreInfoLink.externalLink, '_blank') :
                    () => {}}>
                    {sectionInfo.moreInfoLink.text}
                    <ArrowForward style={{marginLeft: this.props.theme.spacing.unit}}/>
                  </Button>
                </HashLink>
              </Grid>
            </Grid>
          )}

        </Grid>
      )
    );
  };
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(LandingIIOT)))
