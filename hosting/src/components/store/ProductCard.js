import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as Actions from '../../redux/actions'
import { Grid, Typography, IconButton, Badge, Button, Paper }   from 'material-ui';
import  AddShoppingCart  from 'material-ui-icons/AddShoppingCart';
import { withStyles, withTheme } from 'material-ui/styles';

import SmartBadge from '../utilities/SmartBadge'

var mapStateToProps = (state, ownProps) => ({
  product: state.shopify[ownProps.productID],
  productID: ownProps.productID
})

const styles = theme => ({
  card: {
    maxWidth: 400,
  }
});

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      deletionHover: false,
      countInCart: 0
    }
  }

  productTitle() {

    return (
      <Link to={'/product/' + this.props.productID} style={{textDecoration: 'none'}}>
        <Typography align='left' variant="title" gutterBottom paragraph >
          {this.props.product.title}
        </Typography>
      </Link>
    )
  }

  productDescription() {

    return (
      <Typography align='left' variant="body1" gutterBottom paragraph>
          {this.props.product.description}
      </Typography>
    )
  }

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
          position:'relative',
          overflowX: 'hidden'
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
    }

    return (
      <Link to={'/product/' + this.props.productID}>
        <div {...inputs.imageAndOverlayContainer}>
          <img {...inputs.image}/>
          <div {...inputs.overlay}/>
        </div>
      </Link>
    )
  }

  buyButtonWithPrice() {

    const inputs = {
      addToCartButton: {
        variant: "raised",
        color: "secondary",
        size: 'small',
        style: {
          margin: this.props.theme.spacing.unit,
          height: 38,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: this.props.theme.spacing.unit * 2,
          color: "#ececec"
        },
        onClick: () => {
          this.props.addProductToCart(this.props.productID);
          this.setState({countInCart: this.state.countInCart + 1});
        }
      },
      buttonAndPriceContainer: {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
        }
      },
      shoppingCartIcon: {
        fontSize: true,
        style: {
          display:'inline-block',
          fontSize: Math.ceil(this.props.theme.typography.fontSize * 1.2),
          margin: this.props.theme.spacing.unit,
          color: "#ececec"
        }
      },
    }

    return (
      <div {...inputs.buttonAndPriceContainer}>
        <Button {...inputs.addToCartButton}>
          Add to Cart
          {SmartBadge(
            <AddShoppingCart {...inputs.shoppingCartIcon}/>,
            this.state.countInCart,
            'primary')
          }
        </Button>
        <Typography variant='body1' style={{paddingLeft: 10}} >
            ${this.props.product.variants[0].price}
        </Typography>
      </div>
    )
  }

  render() {

    return (
      <Grid item xs={12}>
        <Grid container alignItems='stretch' direction='row' spacing={24} style={{overflowX: 'hidden'}}>
          <Grid item xs={12} sm={3} >
            {this.imageWithOverlay()}
          </Grid>

          <Grid item xs={12} sm={9} >
            {this.productTitle()}
            {this.productDescription()}
            {this.buyButtonWithPrice()}
          </Grid>
        </Grid>
     </Grid>
    );
  }
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme()(withStyles(styles)(ProductCard)))
