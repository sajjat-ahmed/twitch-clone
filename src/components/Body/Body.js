import React from 'react';
import Profile from '../Profile/Profile';
import './Body.css';

function Body() {
    return (
        <div className="body">
            <div className="body__left">
                <Profile />
            </div>
            <div className="body__rightPlaceHolder">
                
            </div>
        </div>
    )
}

export default Body;
