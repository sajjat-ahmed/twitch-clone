import React from 'react';
import './Stream.css';

function Stream() {
    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__containerIndicator">
                                ONLINE
                            </div>
                            <h2>Check our the bellow streams from Ninja</h2>
                        </div>
                        <div className="stream__StatueInfo">
                            <i className="fas fa-bell"></i>
                            <p>You will be notified when Ninja is live</p>
                        </div>
                    </div>
                </div>
                <div className="stream__videoEmbed">
                <iframe
                    width="500"
                    height="295"
                    src="https://www.youtube.com/embed/8rXpM-XlnF0"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                </div>
            </div>
        </div>
    )
}

export default Stream;
