import React from 'react';

import './app-header.css';

const AppHeader = () => {
    return (
        <div className='app-header d-flex'>
            <h1>Todo List</h1>
            <p>1 more to do, 3 done</p>
        </div>
    );
};

export default AppHeader;