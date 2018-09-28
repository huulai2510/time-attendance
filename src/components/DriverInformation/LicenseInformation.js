import React, { Component } from 'react';

class LicenseInformation extends Component {
    render() {
        return (
            <div>
                <h5>License Informaion</h5>
                <div className='row'>
                    <div className='col-11 row'>
                        <div className="form-group col-4">
                            <label className='labelform'>License No.</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='' placeholder='Enter License No.'/>
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>State</label>
                            <select className="form-control form-control-sm">
                                <option>State 1</option>
                                <option>State 2</option>
                                <option>State 3</option>
                            </select>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Expiration</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='' placeholder='Enter Expiration'/>
                            </div>
                        </div>
                        <div className="form-group col-6">
                            <label className='labelform'>License Classification</label>
                            <select className="form-control form-control-sm">
                                <option>License Classification 1</option>
                                <option>License Classification 2</option>
                                <option>License Classification 3</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label className='labelform'>Driver Classification</label>
                            <select className="form-control form-control-sm">
                                <option>Driver Classification 1</option>
                                <option>Driver Classification 2</option>
                                <option>Driver Classification 3</option>
                            </select>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Driver District Id</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='' placeholder='Enter Driver District Id'/>
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Fuel Card</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='' placeholder='Enter Fuel Card'/>
                            </div>
                        </div>
                        <div className="form-group col-4">
                            <label className='labelform'>Call Board</label>
                            <div className='input-group'>
                                <input type="text" className="form-control form-control-sm" name='' placeholder='Enter Call Board'/>
                            </div>
                        </div>
                    </div>
                    <div className='col'></div>
                    <div className="form-group col-12">
                        <label className='labelform'>Restrictions</label>
                        <div className='input-group'>
                            <textarea className="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LicenseInformation;