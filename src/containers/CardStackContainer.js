import React, { Component } from 'react'
import DriverInformation from '../components/cardstack/DriverInformation'
import PersonInformation from '../components/cardstack/PersonInformation'
import Qualifications from '../components/cardstack/Qualifications'
import { connect } from 'react-redux'
import { actChangeStatus } from '../actions/index'


class CardStackContainer extends Component {

    constructor() {
        super()
        this.state = {
            size: "minimize"
        }
    }
    render() {
        let { cardStackReducer } = this.props.state
        let { onChangeStatus } = this.props
        return (
            <React.Fragment>
                <div className={this.state.size === "minimize" ? 'col-6' : 'col-10 position-absolute z-index-100 float-right h100 r-0 p-0 bg-light'}>
                    <DriverInformation status={cardStackReducer.statusDriverInformation} changeStatus={onChangeStatus} changeSize={this.changeSize} />
                    <PersonInformation status={cardStackReducer.statusPersonInformaion} changeStatus={onChangeStatus} />
                    <Qualifications status={cardStackReducer.statusQualifications} changeStatus={onChangeStatus} />
                </div>                
            </React.Fragment>
        )
    }

    changeSize = () => {
        this.setState({
            size: this.state.size === 'minimize' ? 'maximize' : 'minimize'
        })
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeStatus: status => {
            dispatch(actChangeStatus(status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardStackContainer)