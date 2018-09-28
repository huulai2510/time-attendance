import React from 'react'
import Home from '../components/Home'
import AdminPanel from '../components/AdminPanel'
import Drivers from '../containers/DriversContainer'
import EdulogAnalytics from '../components/EdulogAnalytics'
import TimesheetRecord from '../containers/TimesheetRecordContainer'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <TimesheetRecord />
    },
    {
        path: '/Home',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/AdminPanel',
        exact: false,
        main: () => <AdminPanel />
    },
    {
        path: '/Drivers',
        exact: false,
        main: () => <Drivers />
    },
    {
        path: '/EdulogAnalytics',
        exact: false,
        main: () => <EdulogAnalytics />
    },
    {
        path: '/TimesheetRecord',
        exact: false,
        main: () => <TimesheetRecord />
    }
]

export default routes