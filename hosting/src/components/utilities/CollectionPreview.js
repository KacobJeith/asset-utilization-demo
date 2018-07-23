import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as Actions from '../../redux/actions'

import { Grid, Typography } from 'material-ui'

import SectionCard from '../utilities/SectionCard'
import CollectionProductPreview from './CollectionProductPreview'

var mapStateToProps = (state, ownProps) => ({
  collection: state.collections[ownProps.collectionName]
});

class CollectionPreview extends React.Component {

  displayCollection() {

    const inputs = {
      section: {
        backgroundColor: '#00e0c5',
        paddingTop: 30,
        paddingBottom: 30,
      },
      header: {
        paddingBottom: 30,
        fontWeight: 'bold',
      },
      grid: {
        style: {
          maxWidth: '100%',
          overflowX: 'hidden',
          margin: '0 auto'
        }
      }
    };

    return (
      SectionCard(inputs.section,
        <div style={{textAlign: 'center'}}>
          <Typography variant='display1' align='center'
            style={{...inputs.header}}>
            {this.props.collection.title}
          </Typography>
          <Grid container {...inputs.grid} justify ='center'>
            {Object.keys(this.props.collection.products).map((key, index) => {
              if (key != 'type') {
                return (
                  <Grid item xs={12} sm={2} key={key}>
                    <CollectionProductPreview key={key} collectionName={this.props.collectionName} productIndex={index}/>
                  </Grid>
                )
              }
            })}
          </Grid>
        </div>
      )
    )
  }

  render() {

    return this.props.collection ? this.displayCollection() : <div/>
    
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionPreview))
