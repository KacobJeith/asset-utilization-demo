import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions'
import {  Grid,
          Typography,
          MenuItem,
          InputLabel,
          FormControl,
          Input,
          InputAdornment,
          TextField,
          IconButton,
          Badge,
          Button,
          Paper,
          Select,
          Hidden }         from 'material-ui';
import  Delete           from 'material-ui-icons/Delete';
import { withStyles, withTheme } from 'material-ui/styles';

import SmartBadge from '../utilities/SmartBadge'


var mapStateToProps = (state, ownProps) => ({
  product: state.shopify[ownProps.productID],
  checkoutID: state.checkoutID,
  productID: ownProps.productID,
  places: state.places,
  associatedPlace: state.cartContext[ownProps.productID],
  quantity: ownProps.quantity,
  titleBar: ownProps.titleBar,
})

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class CartItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      deletionHover: false,
      quantity: props.quantity
    }
  }

  productTitle(variant='body1', align='left') {

    return (
      <Link to={'/product/' + this.props.productID} style={{textDecoration: 'none'}}>
        <Typography align={align} variant={variant} gutterBottom paragraph >
          {this.props.product.title}
        </Typography>
      </Link>
    )
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlePlaceUpdate = event => {
    this.props.updateCartContext(this.props.productID, event.target.value);
  };

  associatedPlace() {

    const inputs = {
      formControl: {
        style: {
          margin: this.props.theme.spacing.unit,
          minWidth: 120,
        }
      }
    }

    return (
      <FormControl {...inputs.formControl}>
        <Select
          value={this.props.associatedPlace}
          onChange={this.handlePlaceUpdate}
          inputProps={{
            name: 'associatedPlace',
            id: 'associated-place',
          }}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          {Object.keys(this.props.places).map((thisPlaceKey) => (
            <MenuItem  value={thisPlaceKey} key={thisPlaceKey}>
              {this.props.places[thisPlaceKey].name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  };

  productQuantity() {

    const inputs = {
      textField: {
        style: {
          width: '80%',
          textAlign: 'center',
        }
      }
    }

    return (
      <TextField
        id="quantity"
        value={this.props.quantity}
        onChange={(event) => {this.props.updateProductQuantity(this.props.lineItemID, event.target.value)}}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        style={{width: '80%'}}
      />
    )
  };

  imageWithOverlay() {

    const inputs = {
      image: {
        src: this.props.product.images[0].src,
        style: {
          maxHeight: "100%",
          maxWidth: "100%",
          display: 'block',
          margin: 'auto'
        }
      },
      imageAndOverlayContainer: {
        style: {
          height:'100%',
          width:'100%',
          position:'relative'
        }
      },
      overlay: {
        style: {
          backgroundColor:'white',
          opacity: this.state.hover ? 0.15 : 0.0,
          height:'100%',
          position:'absolute',
          top:0,
          width:'100%'
        },
        onMouseEnter: ()=> this.setState({hover: true}),
        onMouseLeave: ()=> this.setState({hover: false})
      },
    };

    return (
      <Link to={'/product/' + this.props.productID}>
        <div {...inputs.imageAndOverlayContainer}>
          <img {...inputs.image}/>
          <div {...inputs.overlay}/>
        </div>
      </Link>
    )
  };

  productPrice() {

    return (
      <Typography variant='body1' >
            ${this.props.product.variants[0].price}
        </Typography>
    )
  };

  totalPrice() {

    return (
      <Typography variant='body2' align="right">
            ${this.props.product.variants[0].price * this.props.quantity}
        </Typography>
    )
  };

  titleBarItem = (title, variant='body2') => (
    <Typography variant={variant} align="left">
          {title}
    </Typography>
  );

  deleteButton() {
    return (
      <IconButton
        onClick={(event) => {this.props.removeProductFromCart(this.props.lineItemID)}}
      >
        <Delete/>
      </IconButton>
    )
  };

  normalCart() {
    return (
      <Grid item xs={12} >
        <Grid container alignItems='center' direction='row' justify='space-between' spacing={16} >
          <Grid item xs={2}>
            {this.props.titleBar ? this.titleBarItem() : this.imageWithOverlay() }
          </Grid>

          <Grid item xs={3} >
            {this.props.titleBar ? this.titleBarItem('Product') : this.productTitle()}
          </Grid>

          <Grid item xs={2} >
            {this.props.titleBar ? this.titleBarItem('Place') : this.associatedPlace()}
          </Grid>

          <Grid item xs={1} >
            {this.props.titleBar ? this.titleBarItem('Price') : this.productPrice()}
          </Grid>

          <Grid item xs={1} >
            {this.props.titleBar ? this.titleBarItem('Quantity') : this.productQuantity()}
          </Grid>

          <Grid item xs={1} >
            {this.props.titleBar ? this.titleBarItem('Total Price') : this.totalPrice()}
          </Grid>

        </Grid>
     </Grid>
    )
  };

  mobileProductQuantity() {
    const inputs = {
      textField: {
        style: {
          textAlign: 'center',
        }
      }
    };

    return (
      <TextField
        id="quantity"
        label='Quantity'
        fullWidth={true}
        value={this.props.quantity}
        onChange={(event) => {this.props.updateProductQuantity(this.props.lineItemID, event.target.value)}}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        inputProps={{...inputs.textField}}
      />
    )
  };

  mobileAssociatedPlace() {
    const inputs = {
      formControl: {
        style: {
          textAlign: 'center'
        }
      }
    }

    return (
      <FormControl
        fullWidth={true}
        {...inputs.formControl}>
        <InputLabel htmlFor='wifi-helper'>
          Place
        </InputLabel>
        <Select
          value={this.props.associatedPlace}
          onChange={this.handlePlaceUpdate}
          inputProps={{
            name: 'associatedPlace',
            id: 'associated-place',
          }}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          {Object.keys(this.props.places).map((thisPlaceKey) => (
            <MenuItem  value={thisPlaceKey} key={thisPlaceKey}>
              {this.props.places[thisPlaceKey].name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  };

  mobilePriceForm(label, text) {
    const input = {
      center: {
        style:{
          textAlign: 'centered'
        }
      }
    }
    return (
      <FormControl disabled
        fullWidth={true}>
        <InputLabel
          htmlFor='price-disabled'
          style={{color: 'rgba(0, 0, 0, 0.54)'}}
          >
          {label}
        </InputLabel>
        <Input id='price-helper'
          inputProps={{
            style: {
              textAlign: 'center',
              color: 'rgba(0, 0, 0, 0.87)',
            },
          }}
          value={'$' + text}
          disableUnderline={true}
        />
      </FormControl>
    )
  };

  mobileCart() {

    const { classes } = this.props;

    const inputs = {
      gridItem: {
        style: {
          width: '50%',
          textAlign: 'center',
          marginTop: 10,
          marginBottom: 0
        }
      },
    };

    if (this.props.titleBar == false) {
      return(
        <Grid item xs={12}>
          <Grid container
            direction='column'
            alignItems='center'
            justify='center'
            spacing={8}>

            <Grid item xs={12}>
              {this.productTitle('title', 'center')}
            </Grid>

            <Grid item xs={12}>
              {this.imageWithOverlay()}
            </Grid>

            <Grid item xs={12} {...inputs.gridItem}>
              {this.mobileAssociatedPlace()}
            </Grid>

            <Grid item xs={12} {...inputs.gridItem}>
              <Grid container
                justify='center'
                alignItems='center'
                spacing={0}>
                <Grid item xs={11} style={{margin: 0}}>
                  {this.mobileProductQuantity()}
                </Grid>
                <Grid item xs={1} style={{marginTop: 12}}>
                  {this.deleteButton()}
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} {...inputs.gridItem}>
              {this.mobilePriceForm('Item Price', this.props.product.variants[0].price)}
            </Grid>

            <Grid item xs={12} {...inputs.gridItem}>
              {this.mobilePriceForm('Total Price', this.props.product.variants[0].price * this.props.quantity)}
            </Grid>

          </Grid>
        </Grid>
        )
      }
  }

  render() {

    return (
      <div>
        <Hidden xsDown={true}>
          {this.normalCart()}
        </Hidden>
        <Hidden smUp={true}>
          {this.mobileCart()}
        </Hidden>
      </div>
    )
  }
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles)(CartItemCard)))
