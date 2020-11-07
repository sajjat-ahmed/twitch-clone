import React from 'react';
import './RecentItem.css';

const RecentItem = ({ url, title, url2 }) => {
    return (
        <div className="item">
            <iframe
                width="400"
                height="235"
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen={true}>
            </iframe>

            <div className="item__details">
                <img src={url2} alt=""/>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>Ninja</p>
                    <p>Gameing</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem;
