import React, { Component } from 'react';
import '../css/ArcTriomphe.css';

class ArcTriomphe extends Component {
    render() {
        return (
            <div id={this.props.id} className={'arc-triomphe'} style={{left: this.props.positionX + 'px', bottom: this.props.positionY + 'px'}}>

            </div>
        );
    }
}

export default ArcTriomphe;
