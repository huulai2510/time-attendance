const initialState = [
    {
        name: 'Ricky',
        recordDetail: [
            {
                employeeID: 31234,
                date: "06/25/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            },
            {
                employeeID: 31234,
                date: "05/25/2017",
                login: ['07:11AM', '01:10PM'],
                logout: ['11:10AM', '10:12PM'],
                billingType: 'start'
            },
            {
                employeeID: 31234,
                date: "03/25/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            },
            {
                employeeID: 31234,
                date: "03/25/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            }
        ]
    },
    {
        name: 'Cecile',
        recordDetail: [
            {
                employeeID: 54321,
                date: "06/25/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            },
            {
                employeeID: 54321,
                date: "06/15/2017",
                login: ['07:11AM', '08:30AM', '01:10PM'],
                logout: ['08:00AM', '11:10AM', '10:12PM'],
                billingType: 'start'
            },
            {
                employeeID: 54321,
                date: "06/24/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            },
            {
                employeeID: 54321,
                date: "06/15/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            }
        ]
    },
    {
        name: 'Joe',
        recordDetail: [
            {
                employeeID: 12345,
                date: "06/26/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            },
            {
                employeeID: 12345,
                date: "06/15/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            },
            {
                employeeID: 12345,
                date: "06/23/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            },
            {
                employeeID: 12345,
                date: "06/26/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            }
        ]
    },
    {
        name: 'Elen',
        recordDetail: [
            {
                employeeID: 21234,
                date: "06/21/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            },
            {
                employeeID: 21234,
                date: "06/21/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            },
            {
                employeeID: 21234,
                date: "06/20/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            },
            {
                employeeID: 21234,
                date: "06/20/2017",
                login: '07:11AM',
                logout: '10:12PM',
                billingType: 'start'
            }
        ]
    }
]

const recordDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default recordDetailReducer