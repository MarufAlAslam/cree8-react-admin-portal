import React from 'react';
import { Link } from 'react-router-dom';

const WorksiteDetails = () => {
    return (
        <div className='p-10'>
            Worksite Details Coming Soon
            <Link to={'/admin/worksite/edit'} className='btn btn-blue ml-2 px-5 py-2 rounded-sm' >
                Edit
            </Link>
        </div>
    );
};

export default WorksiteDetails;