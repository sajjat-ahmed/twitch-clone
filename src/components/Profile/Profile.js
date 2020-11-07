import React from 'react';
import RecentItem from '../RecentItem/RecentItem';
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/cef31105-8a6e-4211-a74b-2f0bbd9791fb-profile_image-70x70.png" alt="" />

                <div className="profile__topLeftDetail">
                    <h1>Ninja</h1>
                    <h3>16.1M followers</h3>
                </div>
                <div className="profile__topRight">
                    <i className="fas fa-heart graybg"></i>
                    <i className="fas fa-bell graybg"></i>
                    <i className="fas fa-ellipsis-v"></i>
                </div>

            </div>
            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Video</h2>
                <h1><i className="fas fa-arrow-up"></i></h1>
                <h2>Chat</h2>
            </div>
            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url={'https://www.youtube.com/embed/GCddrlX9NL4'}
                        url2={"https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-90x120.jpg"}
                        title={"WE WEREN'T MEANT TO TRYHARD BUT... FORTNITE"}
                    />

                    <RecentItem
                        url={"https://www.youtube.com/embed/hMCiV7yPD5I"}
                        url2={"https://static-cdn.jtvnw.net/ttv-boxart/Among%20Us-285x380.jpg"}
                        title={"THE BEST TRIO IN FALL GUYS?! - FALL GUYS SEASON 2"}
                    />

                    <RecentItem
                        url={"https://www.youtube.com/embed/GkVjXFmp-8o"}
                        url2={"https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-90x120.jpg"}
                        title={"I CAN'T MISS A SHOT! - FORTNITE"}
                    />
                    
                    <RecentItem
                        url={"https://www.youtube.com/embed/w7o48Eu5AIc"}
                        url2={"https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-90x120.jpg"}
                        title={"I WASN'T EVEN TROLLING! - FORTNITE"}
                    />
                    
                </div>

                <div className="profile__categories">
                    <h2>Ninja's recently stremed Catagories</h2>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-285x380.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Profile;
