import React from 'react';

import './filter-buttons.css';

const FilterButtons = () => {
    return (
        <div className='filter-buttons'>
            <button type='button' className='btn btn-primary'>All</button>
            <button type='button' className='btn btn-outline-secondary'>Active</button>
            <button type='button' className='btn btn-outline-secondary'>Done</button>
        </div>
    );
}

export default FilterButtons;