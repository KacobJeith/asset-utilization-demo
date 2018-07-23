import React from 'react'
import {Badge}   from 'material-ui'

const wrapHOC = (WrappedComponent, count, badgeColor='secondary') => {

	return (
		<div>
		{count > 0 ? 
	            (<Badge color={badgeColor} badgeContent={count}>
	              {WrappedComponent}
	            </Badge>)
            : WrappedComponent
          }
          </div>
          )
}

export default wrapHOC