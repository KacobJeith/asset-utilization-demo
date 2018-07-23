import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../../redux/actions'
import PropTypes from 'prop-types';

import { withStyles }     from 'material-ui/styles';
import Paper              from 'material-ui/Paper';
import Grid               from 'material-ui/Grid';
import IconButton         from 'material-ui/IconButton';
import Typography         from 'material-ui/Typography';
import Button             from 'material-ui/Button'

import  GridList, { 
        GridListTile,   
        GridListTileBar } from 'material-ui/GridList';

import AddShoppingCart    from 'material-ui-icons/AddShoppingCart'

var mapStateToProps = (state, ownProps) => ({
  product: state.shopify[ownProps.match.params.productID],
  variantID: ownProps.match.params.productID
})

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  root: {
    flexGrow: 1,
    margin: "20px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  gridList: {
    flexWrap: 'wrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      viewing: 0
    }
  }

  render() {
    const { classes } = this.props;

    if (!this.props.product) {
      return (<div> No product found </div>)
    } else {
      return (
        <div style={{margin: 25, flexGrow: 1}}>
          <Grid
            container
            spacing={24}
            justify={'center'}
            alignItems={'flex-start'}
          >
            <Grid item xs={5}>
              <Grid
                container
                direction={'column'}
                spacing={24}
                justify={'center'}
                alignItems={'flex-start'}
              >
                <Grid
                  item
                  xs
                  style={{
                    height: 500
                  }}
                >
                    <img
                      src={this.props.product.images[this.state.viewing].src}
                      alt={this.props.product.title}
                      style={{
                        maxWidth:"100%",
                        maxHeight:"100%"
                      }}
                    />
                </Grid>

                <Grid item xs>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs
            >
              <Typography variant="title" gutterBottom paragraph >
                {this.props.product.title}
              </Typography>
              <Typography variant="body1" gutterBottom paragraph wrap>
                {this.props.product.description}
              </Typography>
              <Typography variant="subheading" gutterBottom paragraph wrap>
                {"$" + this.props.product.variants[0].price}
              </Typography>

              <Button
                variant='raised'
                color='secondary'
                className={classes.button}
                size='small'
                onClick={()=>{this.props.addProductToCart(this.props.variantID)}}
              >
                <AddShoppingCart
                  className={classes.leftIcon}
                  style={{
                    height: 30
                  }}
                />
                Add To Cart
              </Button>

            </Grid>
          </Grid>
          <Grid container spacing={24}>

                      {this.props.product.images.map((tile, index) => (
                        <Grid item xs={3} sm={2} md={1} key={tile.id}>
                          <Paper
                            elevation={this.state.viewing == index ? 10 : 5}
                            style={{
                              transition: "transform 400ms",
                              transform: this.state.viewing == index  ? "translate(0px, -5px)" : "translate(0px, 0px)"
                            }}
                          >
                          <img
                            src={tile.src}
                            alt={tile.altText}
                            style={{
                              cursor: 'pointer',
                              maxWidth:"100%",
                              maxHeight:"100%",
                              display: 'block',
                            }}
                            key={tile.id}
                            onMouseEnter={ () => {this.setState({viewing: index})}}
                          />
                          </Paper>
                        </Grid>
                      ))}


          </Grid>
        </div>
      );
    }

  }

}

ProductDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductDetails)))
