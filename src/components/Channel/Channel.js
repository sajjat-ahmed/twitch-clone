import { Avatar } from '@material-ui/core';
import React from 'react';
import './Channel.css';

function Channel({ avatar, name, followers }) {
    return (
        <div className="channel">
            <div className="channel__details">
                <Avatar src={avatar} />
                <p>{name}</p>
            </div>
            <p>🔴{followers}</p>
        </div>
    )
}

export default Channel;
