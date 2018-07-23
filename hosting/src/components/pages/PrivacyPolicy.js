import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withTheme } from 'material-ui/styles';
import * as Actions from '../../redux/actions'
import SectionCard from '../utilities/SectionCard'

import { Grid, Paper, Typography } from 'material-ui'
import policy from '../../assets/PrivacyPolicy.json'
import { logPageView } from '../../GoogleAnalytics'

var mapStateToProps = (state) => ({
});

class PrivacyPolicy extends React.Component {
  componentDidMount() {
    logPageView()
  }

  render() {
    const inputs = {
      paddingTop: 25,
      paddingBottom: 25,
      // backgroundColor: '#5BC3F4',
      background: 'linear-gradient(to bottom right, #1cbdb6, #37b8e9)',
      marginBottom: 40
    };

    return (
      <div>
        {SectionCard(inputs, 
          <Grid container justify ='center' alignItems='center' spacing={24} style={{
          maxWidth: '100%',
          minHeight: 200,
          paddingTop: this.props.theme.spacing.unit * 5,
          paddingBottom: this.props.theme.spacing.unit * 5,
          margin: '0 auto'
        }}>
         
          <Grid item xs={6}>
              <Typography variant='display1' align='center' paragraph style={{color: 'white'}}>
                Privacy Policy
              </Typography>
          </Grid>
        </Grid>
        )}
        <Grid container direction='row' alignItems='stretch' justify='center' style={{maxWidth: '100%', margin: 0}}
        spacing={24}>

            {policy.sections.map((thisSection, sectionIndex) => (
              <Grid item xs={10} key={'section' + sectionIndex}>
                <Typography variant='title' paragraph>
                  {thisSection.title}
                </Typography>
                
                {thisSection.content.map((thisParagraph, paragraphIndex) => (
                  <Typography variant='body1' paragraph key={'paragraph' + sectionIndex + paragraphIndex}>
                    {thisParagraph}
                  </Typography>
                ))}
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTheme()(PrivacyPolicy)))
