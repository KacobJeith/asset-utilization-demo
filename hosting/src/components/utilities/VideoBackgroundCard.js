import React from 'react'
import { Grid, Hidden } from 'material-ui'

const VideoBackgroundCard = (componentProps,  wrappedComponent) => {

  const inputs = {
    outerContainer: {
      // backgroundImage: componentProps.imagePath !== undefined ? `url(${componentProps.imagePath})` : '',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'black',
      backgroundSize:'cover',
      margin: 0,
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxHeight: 400
    },
    videoContainer: {
      style: {
        position: 'absolute',
        top: -1000,
        bottom: -1000,
        left: -1000,
        right: -1000,
        margin: 'auto'
      }
    },
    constrainHeight: {
      style: {
        position: 'absolute',
        top: -1000,
        bottom: -1000,
        left: -1000,
        right: -1000,
        margin: 'auto',
        height: 400,
      }
    },
    constrainWidth: {
      style: {
        position: 'absolute',
        top: -1000,
        bottom: -1000,
        left: -1000,
        right: -1000,
        margin: 'auto',
        width: '110%',
      }
    }
  };

  return(
    <div style={{...inputs.outerContainer, ...componentProps}}>
      <Hidden smUp>
        <div  {...inputs.constrainHeight}>
          <video autoPlay loop muted width='100%' height='100%' id='iiotVid'>
            <source src={componentProps.videoSrc} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </Hidden>

      <Hidden xsDown>
        <div {...inputs.constrainWidth}>
          <video autoPlay loop muted width='100%' height='100%' id='iiotVid'>
            <source src={componentProps.videoSrc} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </Hidden>

      <div style={{position: 'absolute', top: 0, left: 0, zIndex: 2, width: '100%', height: '100%', backgroundColor: componentProps.overlayColor }}>
        {wrappedComponent}
      </div>
    </div>
  );
};

export default VideoBackgroundCard
