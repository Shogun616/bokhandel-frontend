import React from 'react';
import './components.css';

function FrostedGlass(props) {
  const styles={
    width: props.width,
    height: props.height,
  }
  return (
  <div className="frostedGlass" style={styles}>

  </div>
  )
}
export default FrostedGlass;
