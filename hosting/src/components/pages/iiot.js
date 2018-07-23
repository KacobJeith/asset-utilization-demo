import React from 'react'

import { Grid, Typography, Button } from 'material-ui';
import ArrowForward from 'material-ui-icons/ArrowForward'
import { HashLink } from "react-router-hash-link";
import { withTheme } from 'material-ui/styles';
import { withRouter }         from 'react-router-dom'

import SectionCard from '../utilities/SectionCard'
import VideoBackgroundCard from '../utilities/VideoBackgroundCard'
import SplitSectionCard from '../utilities/SplitSectionCard'

import ContactUsSection from '../utilities/ContactUsSection'

import assets from '../../assets/remote/iiotAssets.json'
import photos from '../../assets/remote/photos.json'
import videos from '../../assets/remote/videos.json'
import { logPageView } from '../../GoogleAnalytics'

const titleVariant = 'title';
const titleAlign = 'center';

class IIOT extends React.Component {

  componentDidMount() {
    logPageView()
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
            <Typography variant='display1' align={titleAlign} style={{color:'white'}}>
              Industry. Simplified.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography variant='subheading' align='center' style={{color:'#d2d2d2'}}>
              By embedding Heep Intelligence throughout your process,
              you can unlock higher yields,
              plug security holes,
              and gain competitive advantages for your business.
            </Typography>

          </Grid>
        </Grid>
      )
    )
  };

  productImages() {
    const inputs = {
      padding: 50,
      background: 'linear-gradient(to bottom, #a3b8c9, #fff, #a3b8c9)'
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
          <Grid item xs={12} style={{paddingBottom: 30}}>
            <Typography variant='headline' align='center'>
              We make it easy.
            </Typography>
            <Typography variant='body1' align='center'>
              We've developed a suite of products for solving real problems in industrial environments.
            </Typography>
          </Grid>
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

  sectionLinks(sections) {

    return (
      <Grid container alignItems='center' justify='center' spacing={0}
        style={{
          background: "#143f53",
          padding: this.props.theme.spacing.unit,
          width: '100%',
          margin: '0 auto'
        }}
      >
        {sections.map((nextSection) => (
          <Grid item key={nextSection.link + 'key'}
            style={{marginRight: 20}}

          >
            <HashLink
                smooth
                to={"#" + nextSection.link}
                style={{
                  textDecoration: 'none',
                  outline: 'none',
                }}
                >

                <Button variant='flat' style={{ textTransform: "capitalize", color: '#ddd', fontWeight: 'bold'}}>
                  {nextSection.title}
                </Button>
              </HashLink>
          </Grid>
        ))}
      </Grid>
    )
  }

  splitSectionWithBullets(sectionInfo, orientation) {
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
         justify='center' alignItems='center'>
          <Grid item  xs={12} md={10} style={{paddingTop: 15, paddingBottom: 15}}>
            <Typography variant={titleVariant} align={titleAlign}>
              {sectionInfo.title}
            </Typography>
            <ul>
              <Typography variant='body1' align='left' style={{color: '#999'}}>
                {sectionInfo.bullets.map((thisBullet, index) => (
                  <li key={sectionInfo.link + index}>{thisBullet}</li>
                ))}
              </Typography>
            </ul>
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

  contactUs() {
    const inputs = {
      paddingTop: 25,
      paddingBottom: 25,
      backgroundColor: 'white'
    };

    return(
      SectionCard(inputs,
        <Grid container direction='column' style={{
          maxWidth:'100%',
          minHeight: 400,
          margin: '0 auto'
        }} justify='center' alignItems='center'>
          <Grid item xs={12}>
            <Typography variant='headline' align='center'>
              Let's Get Started.
            </Typography>
            <br/>
            <Typography variant='subheading' align='center' paragraph>
              Contact us for a consulation on how Heep products can augment your operations.
            </Typography>

          </Grid>

          <Grid item>
            <HashLink
              smooth
              to={"/Contact#top"}
              style={{
                textDecoration: 'none',
                outline: 'none'
              }}
            >
            <Button variant='raised' color='secondary' style={{ textTransform: "capitalize"}}>
                Contact Us
              </Button>
            </HashLink>
          </Grid>

        </Grid>
      )
    )
  };

  render() {

    const sections = [
      {
        link: 'security',
        title: 'Security',
        bullets: [
          'Heep networks require no cloud connectivity. You control where your data gets sent.',
          'All Heep devices encrypt even their local communications. No other edge computing platform takes security this seriously.',
          'Leverage Heep to protect your legacy systems with two-factor Authentication'
        ],
        moreInfoLink: {
          text: 'Learn More',
          link: '/product/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xMjYxODQ1MjE3MzA5'
        }
      },
      {
        link: 'insights',
        title: 'Insights',
        bullets: [
          'Optimize your technology investment for actionable insights, without the often costly overhead',
          'Heep Analytics store locally on the edge and across the distributed OS, with option for centralized storage',
          'Become NIST SP 800-171 compliant with 100% asset utilization tracking coverage'
        ],
        moreInfoLink: {
          text: 'Learn More',
          externalLink: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r1.pdf'
        }
      },
      {
        link: 'interoperability',
        title: 'Interoperability',
        bullets: [
          'Focus on your product, not vendor technology integrations',
          'Leveraging the Heep application programming interface (HAPI), your assets communicate seamlessly for lightning fast operation',

        ]
      },
      {
        link: 'local-first',
        title: 'Local First',
        bullets: [
          'By prioritizing local-first communication, Heep control systems operate at maximum networks speeds with 100% uptime',
          'Your data stays in-house. Protect your business assets by holding them close.'
        ]
      },
      {
        link: 'simple-integration',
        title: 'Simplicity',
        bullets: [
          'Heep strives to offer single-wire designs for plug & play installation.',
          'No software installation required on existing systems. Heep devices stand on their own, upgrading your operations while keeping your existing assets obstruction-free'
        ]
      }
    ];

    return (
      <div>
        {this.topBanner()}
        {this.sectionLinks(sections)}
        {this.productImages()}
        {sections.map((sectionInfo, index) => {
          return this.splitSectionWithBullets(sectionInfo, index % 2 == 0 ? 'left' : 'right')
        })}
        <ContactUsSection/>
      </div>
    );
  }
}

export default withRouter(withTheme()(IIOT))
