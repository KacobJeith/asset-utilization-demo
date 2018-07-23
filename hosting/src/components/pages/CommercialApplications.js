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

import videos from '../../assets/remote/videos.json'
import assets from '../../assets/remote/iiotAssets.json'
import images from '../../assets/remote/general.json'
import { logPageView } from '../../GoogleAnalytics'


const titleVariant = 'title';
const titleAlign = 'center';

class CommercialApplications extends React.Component {
  componentDidMount() {
    logPageView()
  }

  topBanner() {

    const inputs = {
      backgroundColor: 'black',
      //TO-DO: Purchase video
      videoSrc: videos.lightbulbs,
      minHeight: 400,
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
              Immerse your Customers in Living Experiences
            </Typography>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Typography variant='subheading' align='center' style={{color:'#bbbbbb'}}>
              Heep control systems are enabling business to offer more dynamic experiences to their customers.
            </Typography>

          </Grid>
        </Grid>
      )
    )
  };


  sectionLinks(sections) {

    return (
      <Grid container alignItems='center' justify='center' spacing={0}
        style={{
          background: "#063832",
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
      imagePath: images[sectionInfo.link]
    };

    return (
      SplitSectionCard(inputs,
        <Grid container id={sectionInfo.link} style={{
          maxWidth:'100%',
          margin: '0 auto'
         }}
         justify='center' alignItems='center'>
          <Grid item  xs={12} md={10}>
            <Typography variant={titleVariant} align={titleAlign}>
              {sectionInfo.title}
            </Typography>

            <Typography variant='body1' align='left' style={{color: '#999'}}>
              <ul>
                {sectionInfo.bullets.map((thisBullet, index) => (
                  <li key={sectionInfo.link + index}>{thisBullet}</li>
                ))}
              </ul>
            </Typography>

          </Grid>
          {sectionInfo.moreInfoLink && (
            <Grid item xs={12}>
              <Grid container justify='center' alignItems='center'>
                <HashLink
                  smooth
                  to={sectionInfo.moreInfoLink.externalLink ?
                    'Business' :
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

  render() {

    const sections = [
      {
        link: 'missionChineseLight',
        title: 'Mission Chinese Food',
        bullets: [
          'Heep Partnered with Smooth Technology to bring the dining room at Mission Chinese Food to life',
          'Chinese lantern inspired lamps throughout the restaurant respond in unison to set the perfect mood'
        ],
        moreInfoLink: {
          text: 'Learn More',
          externalLink: 'https://www.missionchinesefood.com/'
        }
      },
      {
        link: 'escapeTheRoomNuclear',
        title: 'Escape The Room',
        bullets: [
          'Heep Partnered with Escape The Room to build immersive, magical Escape Rooms',
          // 'We don\'t usually think of Escape Rooms as control systems, but behind the scenes there is a network of Heep devices powering the experience.',
          'Heep opened up the creative process for escape room designers - the complexity of managing cross-puzzle communications disappeared'
        ],
        moreInfoLink: {
          text: 'Learn More',
          externalLink: 'https://escapetheroom.com/'
        }
      }
    ];

    return (
      <div>
        {this.topBanner()}
        {this.sectionLinks(sections)}
        {sections.map((sectionInfo, index) => {
          return this.splitSectionWithBullets(sectionInfo, index % 2 == 0 ? 'left' : 'right')
        })}
        <ContactUsSection/>
      </div>
    );
  }
}

export default withRouter(withTheme()(CommercialApplications))
