const initialState = [
    {
        name: 'Ricky',
        employeeID: '31234',
        status: true,
        jobClass: 'Regular Diver',
        birthday: '10/10/1990',
        initial: 'R.'
    },
    {
        name: 'Cecile',
        employeeID: '54322',
        status: true,
        jobClass: 'Part Time Diver',
        birthday: '11/11/1991',
        initial: 'C.'
    },
    {
        name: 'Joe',
        employeeID: '12345',
        status: false,
        jobClass: 'Sub Bus Attendant',
        birthday: '12/12/1992',
        initial: 'J.'
    },
    {
        name: 'Elen',
        employeeID: '21234',
        status: true,
        jobClass: 'Regular Diver',
        birthday: '13/03/1993',
        initial: 'E.'
    },
    {
        name: 'Cecile',
        employeeID: '54321',
        status: true,
        jobClass: 'Part Time Diver',
        birthday: '14/04/1994',
        initial: 'C.'
    }
]

const timesheetRecordReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default timesheetRecordReducer