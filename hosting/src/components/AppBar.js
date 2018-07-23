import React                  from 'react';
import { Link, NavLink }      from 'react-router-dom'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter }         from 'react-router-dom'
import PropTypes              from 'prop-types';
import classNames             from 'classnames';
import { logos }              from '../assets/remote/Logos'

import * as actions           from '../redux/actions'

import {  AppBar,
          Avatar,
          Badge,
          Button,
          Divider,
          Drawer,
          FormControlLabel,
          FormGroup,
          Grid,
          Hidden,
          IconButton,
          Menu,
          MenuItem,
          List,
          Switch,
          Toolbar,
          Typography }        from 'material-ui'

import MenuIcon               from 'material-ui-icons/Menu';
import AccountCircle          from 'material-ui-icons/AccountCircle';
import Mail                   from 'material-ui-icons/Mail';
import ShoppingCartIcon       from 'material-ui-icons/ShoppingCart';
import ShopIcon               from 'material-ui-icons/ShoppingBasket'
import FaceIcon              from 'material-ui-icons/Face'
import DevelopIcon            from 'material-ui-icons/Code'
import Home                   from 'material-ui-icons/Home'
import Business                   from 'material-ui-icons/Business'
import LocalMall                   from 'material-ui-icons/LocalMall'
import Build                  from 'material-ui-icons/Build'


import { withStyles }         from 'material-ui/styles';



import SmartBadge from './utilities/SmartBadge'


var mapStateToProps = (state) => ({
  loginStatus: state.loginStatus,
  itemsInCart: calculateQuantity(state),
  userImage: state.user ? state.user.photoURL : ''
})

const calculateQuantity = (state) => {
  var quantity = 0;

  for (var i =0; i < state.shoppingCart.lineItems.length; i++) {

    quantity += state.shoppingCart.lineItems[i].quantity;
  }

  return quantity
}

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
      width: 60,
      height: 60,
  },
  navLink: {
    textDecoration: 'none',
    outline: 'none'
  },
};

const ShopLink = props => <Link to="/Shop" {...props} style={{ textDecoration: 'none' }}/>


class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorAccountMenu: null,
    mobileMenu: false
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleAccountMenu = event => {
    this.setState({ anchorAccountMenu: event.currentTarget });
  };

  handleAccountMenuClose = () => {
    this.setState({ anchorAccountMenu: null });
  };

  handleMobileMenuOpen = () => {
    this.setState({ mobileMenu: true })
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMenu: false })
  };

  handleLogout = () => {
    this.props.logoutOfFirebase();
    this.handleClose();
  };

  loggedOn() {
    return (
      <div style={{marginLeft: 15}}>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleAccountMenu}
          color="inherit"
        >
          <Avatar
            alt="Adelle Charles"
            src={this.props.userImage}
            className={classNames(this.props.avatar, this.props.bigAvatar)}
          />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={this.state.anchorAccountMenu}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(this.state.anchorAccountMenu)}
          onClose={this.handleAccountMenuClose}
        >
          <NavLink to="/User" style={styles.navLink}>
            <MenuItem onClick={this.handleAccountMenuClose}>Profile</MenuItem>
          </NavLink>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }

  notLoggedOn() {
    return (
      <div>
        <IconButton
          aria-owns={Boolean(this.state.anchorAccountMenu) ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleAccountMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={this.state.anchorAccountMenu}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(this.state.anchorAccountMenu)}
          onClose={this.handleAccountMenuClose}
        >
          <NavLink to="/auth" style={styles.navLink}>
            <MenuItem onClick={this.handleAccountMenuClose}>Login</MenuItem>
          </NavLink>

          <NavLink to="/auth" style={styles.navLink}>
            <MenuItem onClick={this.handleAccountMenuClose}>Create Account</MenuItem>
          </NavLink>
        </Menu>
      </div>
    );
  };

  appBarLink(navLink, linkText) {
    const inputs = {
      Typography: {
        style: {
          color: "white",
          paddingTop: 11,
          paddingBottom: 11,
          fontSize: '1.2rem',
          fontFamily: `"Oswald", "Roboto", "Helvetica", "Arial", sans-serif`,
          textTransform: 'capitalize'
        }
      },
      Button: {
        style: {
          textTransform: "capitalize",
        }
      },
      NavLink: {
        style: {
          textDecoration: "none"
        }
      },
    };

    return (
      <Hidden xsDown>
        <NavLink to={navLink} {...inputs.NavLink}>
          <Button {...inputs.Button}>
              <div {...inputs.Typography}>
                {linkText}
              </div>
          </Button>
        </NavLink>
      </Hidden>
    )
  };

  appBarCart() {

    return (
      <NavLink to="/MyCart" style={{textDecoration: 'none'}}>
        <IconButton aria-label="Add to shopping cart"
          style={{marginBottom: 0}}
        >
          {SmartBadge(
                    <ShoppingCartIcon style={{fill:"white"}}/>,
                    this.props.itemsInCart,
                    'secondary')
          }
        </IconButton>
      </NavLink>
    )
  };

  appBarLogo() {
    const inputs = {
      Logo: {
        src: logos.sideBySide,
        height: 50,
        style: {
          maxWidth: "250%"
        }
      },
    }

    return (
      <NavLink to="/">
        <Button {...inputs.Button}>
          <img {...inputs.Logo}/>
        </Button>
      </NavLink>
    )
  };

  avatarLogin() {

    var loggedInNavs = [];

    if (this.props.loginStatus) {
      loggedInNavs = this.loggedOn();
    } else {
      loggedInNavs = this.notLoggedOn();
    }

    return loggedInNavs
  };

  mobileAppBarLogo() {
    return (
      <Hidden smUp>
        <Grid container justify='center' style={{
          width: '100%',
          height: '100%',
          overflow:' hidden'
        }}>
          <Grid item>
            {this.appBarLogo()}
          </Grid>
        </Grid>
      </Hidden>
    )
  };

  mobileMenuLogo() {
    const inputs = {
      logo: {
        src: logos.gradientLogo,
        height: 60,
        style: {
          maxWidth: "250%"
        },
      },
    };

    return (
      <div>
        <NavLink to="/" style={styles.navLink}>
          <MenuItem style={{
            height: 80,
          }}>
            <Grid container justify='center' style={{maxWidth: '100%', margin: 0}}>
              <Grid item>
                <img {...inputs.logo}/>
              </Grid>
            </Grid>
          </MenuItem>
        </NavLink>

        <Divider />
      </div>
    )
  };

  mobileMenuCart() {

    return (
      <div>
        <NavLink to="/MyCart" style={{textDecoration: 'none'}}>
          <MenuItem style={{fontFamily: `"Oswald", "Roboto", "Helvetica", "Arial", sans-serif`,}}>
              <IconButton aria-label="Add to shopping cart"
                style={{marginBottom: 0}}
              >
                {SmartBadge(
                          <ShoppingCartIcon/>,
                          this.props.itemsInCart,
                          'secondary')
                }
              </IconButton>
              Cart
            </MenuItem>
        </NavLink>
        <Divider/>
      </div>
    )
  };

  mobileMenuLink(link, linkText, linkIcon) {

    return (
      <div>
      <NavLink to={link} style={styles.navLink}>
        <MenuItem style={{fontFamily: `"Oswald", "Roboto", "Helvetica", "Arial", sans-serif`,}}>
          <IconButton>
            {linkIcon}
          </IconButton>
          {linkText}
        </MenuItem>
      </NavLink>

      <Divider/>
    </div>
    )
  };

  mobileMenu() {
    const inputs = {
      menuButton: {
        style:{
          fontSize: 30,
          marginBottom: 3,
          marginRight: 10
        }
      },
    }

    return (
      <Hidden smUp>
          <IconButton
            {...inputs.menuButton}
            onClick={this.handleMobileMenuOpen}
            color="inherit"
          >
            <MenuIcon/>

            <Drawer
              anchor='left'
              open={this.state.mobileMenu}
              onChange={this.handleMobileMenuClose}
              ModalProps={{ onBackdropClick: this.handleMobileMenuClose }}
              PaperProps={{ style: {backgroundColor: '#ECEFF1'} }}
              variant='temporary'
              >

              <div
                tabIndex={0}
                role="button"
                onClick={this.handleMobileMenuClose}
                onKeyDown={this.handleMobileMenuClose}
                style={{
                  width: 200,
                }}
                >

                {this.mobileMenuLogo()}
                {this.mobileMenuLink('/', 'Home', <Home/>)}
                {this.mobileMenuLink('/Technology', 'Technology', <Business/>)}
{/*                 {this.mobileMenuLink('/Makers', 'Makers', <Build/>)} */}
                {/* {this.mobileMenuLink('/Shop', 'Shop', <ShopIcon/>)} */}
                {this.mobileMenuLink('/About', 'About', <FaceIcon/>)}
                {this.mobileMenuLink('/Contact', 'Contact', <Mail/>)}
                {/* {this.mobileMenuCart()} */}
{/*                 {this.mobileMenuLink('/Developers', 'Develop', <DevelopIcon/>)} */}

              </div>
            </Drawer>
          </IconButton>
      </Hidden>
    )
  }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" style={{overflowX: 'hidden'}}>
          <Toolbar>
            {this.mobileMenu()}
            <Hidden xsDown>
              {this.appBarLogo()}
            </Hidden>
            {this.mobileAppBarLogo()}
            <div className={classes.flex}/>
            {this.appBarLink("/", "Home")}
            {this.appBarLink("/Technology", "Technology")}
{/*             {this.appBarLink("/Makers", "Makers")} */}
            {this.appBarLink("/About", "About")}
            {this.appBarLink("/Contact", "Contact")}
            {/* {this.appBarLink("/Shop", "Shop")} */}
{/*             {this.appBarLink("/Developers", "Develop")} */}
            {/* {this.appBarCart()} */}
{/*             {this.avatarLogin()} */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MenuAppBar)))
