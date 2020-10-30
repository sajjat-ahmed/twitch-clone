import React from 'react';
import Channel from '../Channel/Channel';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel
                    avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="cleaverprogrammer"
                    followers="816k"
                />

                <Channel
                    avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="cleaverprogrammer"
                    followers="816k"
                />

                <h5>RECOMMENDED CHANNELS</h5>
                <Channel
                    avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="cleaverprogrammer"
                    followers="816k"
                />

                <p className="sidebar__topShowMore">Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search to Add Friends" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
