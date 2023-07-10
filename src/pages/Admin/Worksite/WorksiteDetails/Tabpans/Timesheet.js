import React from 'react'
import MultiLineChart from '../Charts/MultiLineChart'
import TimesheetTable from '../../../../../shared/DataTable/TimesheetTable'

const Timesheet = () => {
    return (
        <div>
            <MultiLineChart/>

            <div className='mt-5'>
                <TimesheetTable/>
            </div>
        </div>
    )
}

export default Timesheet