import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withTheme } from 'material-ui/styles';
import * as Actions from '../../redux/actions'
import SectionCard from '../utilities/SectionCard'
import { logPageView } from '../../GoogleAnalytics'

import { Grid, Paper, Typography } from 'material-ui'
import tos from '../../assets/TermsOfService.json'

var mapStateToProps = (state) => ({
});

class TermsOfService extends React.Component {
  componentDidMount() {
    logPageView()
  }

  render() {
    const inputs = {
      paddingTop: 25,
      paddingBottom: 25,
      // backgroundColor: '#5BC3F4',
      background: 'linear-gradient(to bottom right, #65D0CA, #9D24CA)',
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
                Terms of Service
              </Typography>
          </Grid>
        </Grid>
        )}
        <Grid container direction='row' alignItems='stretch' justify='center' style={{maxWidth: '100%', margin: 0}}
        spacing={24}>

            {tos.sections.map((thisSection, sectionIndex) => (
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTheme()(TermsOfService)))
