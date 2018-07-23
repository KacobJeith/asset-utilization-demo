import React from 'react'
import { Grid } from 'material-ui'

const SectionCard = (componentProps, wrappedComponent) => {

  const inputs = {
    outerContainer: {
      backgroundImage: componentProps.imagePath !== undefined ? `url(${componentProps.imagePath})` : '',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize:'cover',
      maxWidth: '100%',
      margin: 0,
    }
  };

  return(
    <div style={{...inputs.outerContainer, ...componentProps}}>
      {wrappedComponent}
    </div>
  );
};

export default SectionCard
