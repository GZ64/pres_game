import React, { Component } from 'react';
import '../css/Louvre.css';

class Louvre extends Component {
    render() {
        return (
            <div id={this.props.id} className={'louvre'} style={{left: this.props.positionX + 'px', bottom: this.props.positionY + 'px'}}>

            </div>
        );
    }
}

export default Louvre;
