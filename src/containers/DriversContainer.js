import React, { Component } from 'react'
import Drivers from './DriverContainer'
import CardStackContainer from './CardStackContainer'
import { connect } from 'react-redux'

class DriversContainer extends Component {
    render() {
        return (
            <div className='row'>
                <Drivers />
                <CardStackContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DriversContainer)