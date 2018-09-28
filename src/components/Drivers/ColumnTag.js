import React, { Component } from 'react'


class ColumnTag extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employeeID: '',
            status: "null",
            jobClass: '',
            birthday: '',
            initial: ''
        }
    }
    render() {
        return (
            <div className='row text-white bg-primary rounded p-2'>
                {this.showInputField(this.props.columnFilter)}
                <div className='w-100'>
                    <button type="button" className="btn btn-success mr-3 float-right" onClick={() => this.props.onSearch(this.state)}>search</button>
                    <div className="dropdown">
                        <button type="button" className="btn btn-success float-right mr-3 dropdown-toggle" data-toggle="dropdown">
                            Add Filter
                        </button>
                        <div className="dropdown-menu">
                            {this.showAddFilter(this.props.columnFilter)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    showInputField = fields => {
        let result = null
        if (fields.length > 0) {
            result = fields.filter(field => field.status).map((field, index) => {
                return (
                    <div className="form-group col-4" key={index}>
                        <label>{field.name}</label>
                        <div className='input-group'>
                            {field.name !== 'status' ? <input type="text" className="form-control" name={field.name} value={this.state.tag} onChange={this.onChange} /> :
                                <select className="custom-select" name={field.name} value={this.state.status} onChange={this.onChange} >
                                    <option value="null">all</option>
                                    <option value="true">active</option>
                                    <option value="false">not active</option>
                                </select>}
                            <div className="input-group-append">
                                <i className="fas fa-times-circle input-group-text btn" onClick={() => this.props.onDeleteColumnTag(field.name)}></i>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return result
    }

    showAddFilter = filters => {
        let result = null
        if (filters.length > 0) {
            result = filters.map((filter, index) => {
                return (
                    <span className="dropdown-item btn" key={index} onClick={() => this.props.onAddColumnTag(filter.name)} ><i className={filter.status ? 'far fa-check-square' : 'far fa-square'}></i> {filter.name}</span>
                )
            })
        }
        return result
    }

    onChange = (e) => {
        let target = e.target
        let name = target.name
        let value = target.value
        if  (value === 'true') {
            value = true
        } else if (value === 'false') {
            value = false
        }
        this.setState({
            [name]: value
        })
    }
}

export default ColumnTag