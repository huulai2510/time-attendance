import React, { Component } from 'react';

class HeadingDrivers extends Component {
    render() {
        return (
            <div>
                <i className="far fa-window-maximize float-right fa-2x mt-2" onClick={() => this.props.changeSize()}></i>
                <h1>Drivers</h1>
            </div>
        );
    }
}

export default HeadingDrivers;