import React, { Component } from 'react';
import '../css/Arbre.css';

class Arbre extends Component {
    render() {
        return (
            <div id={this.props.id} className={'arbre'} style={{left: this.props.positionX + 'px', bottom: this.props.positionY + 'px'}}>

            </div>
        );
    }
}

export default Arbre;
