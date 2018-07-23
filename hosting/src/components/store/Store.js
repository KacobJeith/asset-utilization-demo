import React                  from 'react'
import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import { withRouter }         from 'react-router-dom'

import { Grid }   from 'material-ui';

import * as Actions         from '../../redux/actions'
import ProductCard          from './ProductCard'

var mapStateToProps = (state) => ({
  products: state.shopify
})

class Store extends React.Component {

  render() {
    
    const inputs = {
      parentGrid: {
        style: {
          margin: '0 auto',
          overflowX: 'hidden',
          maxWidth: '100%'
        }
      }
    }

    return (
      <div style={{marginTop: 20}}>
        <Grid container justify='center' {...inputs.parentGrid}>
          <Grid item xs={10} style={{padding:24}}>
            <Grid container direction='row' alignItems='stretch' spacing={16}>
              {Object.keys(this.props.products).map((key) => (
                <ProductCard key={key} productID={key}/>)
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );


  }
}

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Store))
