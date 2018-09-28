import React, { Component } from 'react'

class PersonInformation extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header bg-primary text-white" onClick={() => !this.props.status ? this.props.changeStatus('PersonInformation') : ``}>
                    Person Information
                </div>
                {this.props.status ? <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div> : <React.Fragment></React.Fragment>}
            </div>
        )
    }
}

export default PersonInformation