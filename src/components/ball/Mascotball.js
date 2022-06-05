import React from 'react';
import Logo from './img.png';
import './Ball.css';

function MascotBall (props) {
    const styles = {
        position: 'absolute',
        borderRadius: '50%',
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
    }
    return (
        <div className="Mascot-ball" style={styles}>
            <img src={Logo} alt="Shaya Solutions Logotype" className="Logotype-ball" />
        </div>
    )
}

export default MascotBall
