import React                          from 'react';
import { connect }                    from 'react-redux'
import { bindActionCreators }         from 'redux'
import {  Link, NavLink, withRouter } from 'react-router-dom'
import PropTypes                      from 'prop-types';
import { HashLink } from "react-router-hash-link";

import {  Grid,
          Hidden,
          Typography }        from 'material-ui'

import { withStyles, withTheme } from 'material-ui/styles';

import * as actions from '../redux/actions'


var mapStateToProps = (state, ownProps) => ({
})

const styles = theme => ({
  root: {
    backgroundColor:  theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
});

class Footer extends React.Component {

  socialLogo(svg, url) {
    return (
      <Grid item xs={4} sm={3} style={{textAlign: 'center', display:'block'}}>
        <a href={url}>
          <img src={'src/assets/svg_social/' + svg + '.svg'}
            style={{maxHeight: 50}}
          />
        </a>
      </Grid>
    )
  };

  socialLogoLinks() {
    return(
      <Grid item xs={12}>
        <Grid container
          spacing={8}
          justify='center'
          alignItems='center'
          style={{margin: 0, maxWidth: '100%'}}
        >
          {this.socialLogo('instagram', 'https://www.instagram.com/heep_inc/')}
          {this.socialLogo('facebook-box', 'https://www.facebook.com/heepio/')}
          {this.socialLogo('linkedin-box', 'https://www.linkedin.com/company/heep-inc/')}
          {this.socialLogo('github-circle', 'https://github.com/HeepIO')}
        </Grid>
      </Grid>
    )
  };

  copyrightMadeInNYC() {
    return(
      <Grid item xs={12}>
        <Typography variant="caption" color='inherit'>
          &#169; 2018 Heep - Made with <span style={{color: 'red'}}>&#9829;</span> in NYC
        </Typography>
      </Grid>
    )
  };

  heepLogo() {
    return(
      <Grid item xs={2}>
        <NavLink to='/' style={{textDecoration: 'none'}}>
          <img
            src="src/assets/Heep_Gradient.png"
            style={{
              maxHeight: 50
            }}/>
        </NavLink>
      </Grid>
    )
  };

  mobileHeepLogo() {
    return(
      <Grid item xs={12} style={{textAlign: 'right'}}>
        <NavLink to='/' style={{textDecoration: 'none'}}>
          <img
            src="src/assets/Heep_Gradient.png"
            style={{
              maxHeight: 80
            }}/>
        </NavLink>
      </Grid>
    )
  };

  textNavLink(text, url, variant) {

    return(
      <Grid item xs={12} sm={12}>
        <HashLink to={url}
        smooth
        style={{
          textDecoration: 'none',
          color: this.props.theme.palette.primary.contrastText
        }}>
          <Typography variant={variant} color='inherit' align='center'>
            {text}
          </Typography>
        </HashLink>
      </Grid>
    )
  };

  normalFooterLeft() {
    return (
      <Grid item xs={3}>
        <Grid container
          spacing={8}
          justify='center'
          alignItems='flex-start'
          direction='column'
        >
{/*           {this.textNavLink('Account', '/User', 'caption')} */}
{/*           {this.textNavLink('Shop', '/Store', 'caption')} */}
{/*           {this.textNavLink('Blog', '/Blog', 'caption')} */}
{/*           {this.textNavLink('Developers', '/Developers', 'caption')} */}
          {this.textNavLink('About Us', '/About#top', 'subheading')}
          {this.textNavLink('Contact Us', '/Contact#top', 'subheading')}
        </Grid>
      </Grid>
    )
  };

  normalFooterCenter() {
    return (
      <Grid item xs={6}>
        <Grid container
          spacing={8}
          direction='column'
          alignItems='center'
          justify='center'
        >
          {this.heepLogo()}
          {this.socialLogoLinks()}
          {this.copyrightMadeInNYC()}
        </Grid>
    </Grid>
    )
  };

  normalFooterRight() {
    return(
      <Grid item xs={3}>
        <Grid container
          spacing={8}
          direction='column'
          alignItems='flex-end'
        >
{/*           {this.textNavLink('About Us', '/About', 'caption')} */}
{/*           {this.textNavLink('Contact Us', '/Contact', 'caption')} */}
          {this.textNavLink('Privacy Policy', '/privacypolicy#top', 'subheading')}
          {this.textNavLink('Terms of Service', '/tos#top', 'subheading')}
        </Grid>
      </Grid>
    )
  };

  normalFooter() {
    return (
      <Hidden xsDown={true}>
        <Grid container
          spacing={24}
          justify='space-between'
          alignItems='center'
          direction='row'
          >
            {this.normalFooterLeft()}
            {this.normalFooterCenter()}
            {this.normalFooterRight()}
        </Grid>
      </Hidden>
    )
  };

  mobileFooterLeft() {
    return (
      <Grid item xs={6}>
        <Grid container
          direction='column'
          spacing={0}
          justify='center'
          alignItems='flex-start'
        >
          {this.textNavLink('About Us', '/About', 'subheading')}
          {this.textNavLink('Contact Us', '/Contact', 'subheading')}
          {this.textNavLink('Privacy Policy', '/privacypolicy#top', 'subheading')}
          {this.textNavLink('Terms of Service', '/tos#top', 'subheading')}
        </Grid>
      </Grid>
    )
  };

  mobileFooterRight() {
    return (
      <Grid item xs={6}>
        <Grid container
          direction='column'
          justify='center'
          alignItems='flex-end'
          spacing={0}>
          {this.mobileHeepLogo()}
          <Grid item xs={12}>
            <Typography variant="caption" color='inherit' style={{marginRight: 5}}>
              &#169; 2018 Heep
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  };

  mobileFooter() {
    return (
      <Hidden smUp={true}>
        <Grid container
          justify='space-between'
          alignItems='center'
          >
          {this.mobileFooterLeft()}
          {this.mobileFooterRight()}
        </Grid>
      </Hidden>
    )
  }

  render() {
    const { classes } = this.props;

    const inputs = {
      footerContainer: {
        style: {
          padding: 24,
          backgroundColor: this.props.theme.palette.primary.main,
          color: this.props.theme.palette.primary.contrastText,
          overflowX: 'hidden'
        }
      }
    }

    return (
      <footer >
        <div {...inputs.footerContainer}>
          {this.normalFooter()}
          {this.mobileFooter()}
        </div>
      </footer>
    );

  }

}


var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles)(Footer))));
