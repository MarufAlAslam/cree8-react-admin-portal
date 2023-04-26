import React from 'react'
import HistoryHeader from './HistoryHeader'
import SiteManagerHistoryTable from '../../../../shared/DataTable/SiteManagerHistoryTable'

const SiteManagerHistory = () => {
    return (
        <div className='p-6'>
            <HistoryHeader/>

            <div className='pt-5 bg-white'>
                <SiteManagerHistoryTable/>
            </div>
        </div>
    )
}

export default SiteManagerHistory