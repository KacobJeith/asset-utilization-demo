import React from 'react';

import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import { withRouter, Link }         from 'react-router-dom'

import * as Actions         from '../../redux/actions'
import { Typography, Grid, Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';

var mapStateToProps = (state, ownProps) => ({
  product: state.collections['featuredItems'].products[ownProps.productIndex],
});

var imageHeight = 300;

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 0,
    margin: '0 auto',
    height: imageHeight,
    overflow: 'hidden',
    position: 'relative'
  }),
});

class FeaturedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  };

  productTitle() {
    return(
        <Typography variant='subheading' align='center'
          style={{
            paddingTop: 10}}>
        {this.props.product.title}
        </Typography>
    );
  };

  productImage() {
    const inputs = {
      image: {
        src: this.props.product.images[0].src,
        style: {
          position: 'absolute',
          top: -1000,
          bottom: -1000,
          left: -1000,
          right: -1000,
          margin: 'auto',
          height: imageHeight,
        },
      },
    };
    return(
      <img {...inputs.image}/>
    )
  };

  productPrice() {
    return (
      <Typography variant="subheading" align='center' gutterBottom paragraph wrap>
        {"$" + this.props.product.variants[0].price}
      </Typography>
    )
  }

  render() {

    const { classes } = this.props;
    console.log(this.props.products)

    return(
        <Link to={'/product/' + this.props.product.variants[0].id} style={{textDecoration: 'none'}}>
          <Paper className={classes.root}
            elevation={this.state.hover ? 10 : 5}
            onMouseEnter={()=> {this.setState({hover: true})}}
            onMouseLeave={()=> {this.setState({hover: false})}}
            style={{transform: this.state.hover ? 'translate(0px, -5px)' : 'translate(0px, 0px)'}}
          >
            {this.productImage()}
          </Paper>
          {this.productTitle()}
        </Link>
    );
  };
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FeaturedItems)))
