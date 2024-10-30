import React, { Component } from 'react';
import '../css/TourEiffel.css';

class TourEiffel extends Component {
    render() {
        return (
            <div id={this.props.id} className={'tour-eiffel'} style={{left: this.props.positionX + 'px', bottom: this.props.positionY + 'px'}}>

            </div>
        );
    }
}

export default TourEiffel;
