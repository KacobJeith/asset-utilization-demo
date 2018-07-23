import React                  from 'react'
import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import { withRouter, Link }         from 'react-router-dom'

import { Grid, Typography, Paper, Divider, Hidden }   from 'material-ui';

import * as Actions         from '../../redux/actions'
import CartItemCard          from './CartItemCard'
import { withTheme } from 'material-ui/styles';
import { buttonLink, buttonLinkWithAction } from '../utilities/ButtonUtils'

var mapStateToProps = (state) => ({
  cart: state.shoppingCart,
  lineItems: state.shoppingCart.lineItems
})

class ManageCart extends React.Component {

  cartTitleLine = (variant='title') => (
    <Typography align='left' variant={variant} gutterBottom paragraph >
      Your Order
    </Typography>
  )

  cartSubtotal = () => (
    <Typography align='right' variant="title" gutterBottom paragraph >
      Subtotal: ${this.calculateSubtotal()}
    </Typography>
  )

  calculateSubtotal() {
    var subtotal = 0;
    for (var i = 0; i < this.props.lineItems.length; i++) {
      subtotal += this.props.lineItems[i].quantity * parseInt(this.props.lineItems[i].variant.price);
    }

    return subtotal
  }

  cartEmpty() {

    const inputs = {
      gridContainer: {
        style: {
          height: '70vh',
          width: '100vw',
          overflowX: 'hidden',
          margin: 0,
          maxWidth: '100%'
        }
      },
    };

    return (
      <Grid container
        {...inputs.gridContainer}
        justify='center'
        alignItems='center'>
        <Grid item xs={10} sm={8} md={4}>
          <Paper style={{
            position: "relative",
            padding: this.props.theme.spacing.unit * 4,
            backgroundColor: this.props.theme.palette.background.paper,
          }}>
          <Grid container
            direction='column'
            justify='center'
            alignItems='center'>
              <Grid item sm={12}>
                <Typography align='center' variant="title" gutterBottom paragraph >
                  Add some items to experience the power of Heep!
                </Typography>
              </Grid>
              <Grid item sm={12}>
                {buttonLink('Back to Store', '/Shop')}
            </Grid>
            </Grid>

          </Paper>
        </Grid>
      </Grid>
    )
  };

  checkoutButton = () => (
    buttonLinkWithAction('Proceed to Checkout', '/Checkout', () =>
    this.props.completeCheckout())
  )

  orderInProgressNormal = () => (
      <Grid container justify='center' style={{marginTop: 20, maxWidth:'100%'}}>
        <Grid item xs={12} sm={11} style={{padding:24}}>
          <Grid container direction='row' alignItems='stretch' spacing={16} style={{minWidth:770}}>
            <Grid item xs={12}>
              {this.cartTitleLine()}
            </Grid>
            <Paper elevation={6} style={{padding:this.props.theme.spacing.unit*4}}>
              <CartItemCard titleBar={true}/>
              <Divider style={{margin: this.props.theme.spacing.unit * 2}}/>
              {this.props.lineItems.map((cartItem) => (
                <CartItemCard
                key={cartItem.variant.id}
                productID={cartItem.variant.id}
                quantity={cartItem.quantity}
                lineItemID={cartItem.id}
                titleBar={false}/>)
              )}

              <Divider style={{margin: this.props.theme.spacing.unit * 4}}/>
              {this.cartSubtotal()}
            </Paper>
            <Grid item xs={12} style={{marginTop: this.props.theme.spacing.unit * 4}}>
              {this.checkoutButton()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )

  orderInProgressMobile() {
    const inputs = {
      gridContainer: {
        style: {
          margin: 0,
          overflowX: 'hidden',
          maxWidth: '100%',
          padding: this.props.theme.spacing.unit*2
        }
      }
    }

    return(
      <Grid container
        {...inputs.gridContainer}
        direction='column'
        alignItems='center'
        justify='center' >
        <Grid item xs={12} style={{paddingTop: 10}}>
        {this.cartTitleLine('display1')}
        </Grid>
        {this.props.lineItems.map((cartItem) => (
          <Grid item xs={12} key={cartItem.variant.id}>
            <Paper elevation={6} style={{padding:this.props.theme.spacing.unit*4}}>
              <CartItemCard
              key={cartItem.variant.id}
              productID={cartItem.variant.id}
              quantity={cartItem.quantity}
              lineItemID={cartItem.id}
              titleBar={false}/>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12}
          style={{
            padding: 0,
            marginTop: 15,
            marginBottom: 0,
            width: '100%'
          }}>
          {this.cartSubtotal()}
        </Grid>
        <Grid item sm={12}
          style={{
            padding: 0,
            marginTop: 0,
            marginBottom: 15,
            width: '100%'
          }}>
          {this.checkoutButton()}
        </Grid>
      </Grid>
    )
  }


  render() {

    if (this.props.lineItems.length == 0) {

      return this.cartEmpty()

    } else {

      return (
        <div>
          <Hidden xsDown={true}>
            {this.orderInProgressNormal()}
          </Hidden>
          <Hidden smUp={true}>
            {this.orderInProgressMobile()}
          </Hidden>
        </div>
      )
    }
  }
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTheme()(ManageCart)))
