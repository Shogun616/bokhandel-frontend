import React from 'react';
import './Ball.css';

function Ball(props) {
  const styles = {
    position: 'absolute',
    borderRadius: '50%',
    height: props.height,
    width: props.width,
    top: props.top,
    bottom: props.bottom,
    left: props.left,
    right: props.right,
    zIndex: props.zIndex,
  };
  return <div className={props.className} style={styles}/>;
}

export default Ball;
