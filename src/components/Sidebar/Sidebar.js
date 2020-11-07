import React from 'react';
import Channel from '../Channel/Channel';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-70x70.png"
                    name="Ninja"
                    followers="16.1M"
                />

                <Channel
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/8b183655-aca2-4bb2-b97f-52a92ed8559a-profile_image-70x70.png"
                    name="Mickalow"
                    followers="933K"
                />

                <Channel
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/e7d716e5-0be2-4dac-afba-27f33d93d57a-profile_image-70x70.png"
                    name="mrSavage"
                    followers="1.9M"
                />

                <h5>RECOMMENDED CHANNELS</h5>
                <Channel
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/3a6beb4c-f325-4516-80a4-6df619c786ab-profile_image-70x70.png"
                    name="DainMilkman"
                    followers="154K"
                />

                <Channel
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/4a5c1148-a148-4849-a2a8-656dc73d52ea-profile_image-70x70.png"
                    name="JASONR"
                    followers="781K"
                />

                <Channel
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/8523ca96-6714-44be-ab96-150c7d3343c5-profile_image-70x70.png"
                    name="Degosaurs"
                    followers="559K"
                />

                <Channel
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/07156e3d-eac2-4d5f-acc1-8a942a59e6e2-profile_image-70x70.png"
                    name="chocoTaco"
                    followers="1.2M"
                />

                <Channel
                    avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/52ef5525-b19f-44f1-b342-2a7e33c45cc3-profile_image-70x70.jpeg"
                    name="ESL_DOTA2"
                    followers="379K"
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
