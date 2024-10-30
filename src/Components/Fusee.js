import React, { Component } from 'react';
import '../css/Fusee.css';

class Fusee extends Component {
    render() {
        return (
            <div id={this.props.id} className={'fusee'} style={{left: this.props.positionX + 'px', bottom: this.props.positionY + 'px'}}>

            </div>
        );
    }
}

export default Fusee;
