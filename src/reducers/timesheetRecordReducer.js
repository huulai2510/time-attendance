const initialState = [
    {
        name: 'Ricky',
        employeeID: '31234',
        status: true,
        jobClass: 'Regular Diver'
    },
    {
        name: 'Cecile',
        employeeID: '54322',
        status: true,
        jobClass: 'Part Time Diver'
    },
    {
        name: 'Joe',
        employeeID: '12345',
        status: false,
        jobClass: 'Sub Bus Attendant'
    },
    {
        name: 'Elen',
        employeeID: '21234',
        status: true,
        jobClass: 'Regular Diver'
    },
    {
        name: 'Cecile',
        employeeID: '54321',
        status: true,
        jobClass: 'Part Time Diver'
    }
]

const timesheetRecordReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default timesheetRecordReducer