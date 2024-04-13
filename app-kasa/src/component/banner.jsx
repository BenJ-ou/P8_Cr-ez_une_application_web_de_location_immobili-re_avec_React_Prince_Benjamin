// Banner.jsx
import React from 'react';
import '../css/banner.css';

const Banner = ({ image, text }) => (
    <div className="banner-container" style={{ backgroundImage: `url(${image})` }}>
        {text && (
            <div className="banner-text">
                <h1>{text}</h1>
            </div>
        )}
    </div>
);

export default Banner;

