import React from 'react';
import Profile from '../Profile/Profile';
import Stream from '../Stream/Stream';
import './Body.css';

function Body() {
    return (
        <div className="body">
            <div className="body__left">
                <Stream />
                <Profile />
            </div>
        </div>
    )
}

export default Body;
