import React, { Component } from 'react';
import '../css/Cloud.css';

class Cloud extends Component {
    render() {
        return (
            <div id={this.props.id} className={'cloud'} style={{left: this.props.positionX + 'px', bottom: this.props.positionY + 'px'}}>

            </div>
        );
    }
}

export default Cloud;
