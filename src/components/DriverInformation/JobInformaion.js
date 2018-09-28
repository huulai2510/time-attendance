import React, { Component } from 'react';

class JobInformaion extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col'>
                        <h5>Job Informaion</h5>
                    </div>
                    <div className='col float-right'>
                        <div className="form-check float-right">
                            <label className="form-check-label labelform">
                                <input type="radio" className="form-check-input" name="active" />
                                Not Active
                            </label>
                        </div>
                        <div className="form-check float-right mr-2">
                            <label className="form-check-label labelform">
                                <input type="radio" className="form-check-input" name="active" />
                                Active
                            </label>
                        </div>
                        <p className='float-right mr-2'>Status:</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='row col-11'>
                        <div className="form-group col-6">
                            <label className='labelform'>Job Description</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='' placeholder='Enter job description' required />
                            </div>
                        </div>
                        <div className="form-group col-6">
                            <label className='labelform'>Department</label>
                            <select className="form-control form-control-sm">
                                <option>Department 1</option>
                                <option>Department 2</option>
                                <option>Department 3</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label className='labelform'>Work Group</label>
                            <select className="form-control form-control-sm">
                                <option>Work Group 1</option>
                                <option>Work Group 2</option>
                                <option>Work Group 3</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label className='labelform'>Job class</label>
                            <select className="form-control form-control-sm">
                                <option>Job class 1</option>
                                <option>Job class 2</option>
                                <option>Job class 3</option>
                            </select>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Work phone</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='' placeholder='Enter work phone' required />
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Email</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='' placeholder='Enter email' required />
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Home phone</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='' placeholder='Enter ome phone' required />
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                    <div className="form-group col-12">
                        <label className='labelform'>Note</label>
                        <div className='input-group'>
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default JobInformaion;