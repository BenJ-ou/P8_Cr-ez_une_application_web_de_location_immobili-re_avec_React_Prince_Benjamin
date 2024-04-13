import React, { useState } from 'react';
import arrowBack from '../assets/arrow_back.png';
import arrowBack2 from '../assets/arrow_back2.png';
import '../css/collapse.css';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`collapse-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            <div className="collapse-header">
                <p>{title}</p>
                <img className={`collapse-icon ${isOpen ? 'rotate-up' : 'rotate-down'}`} src={isOpen ? arrowBack2 : arrowBack} alt='collapse icon'/>

            </div>
            {isOpen && (
                <div className="collapse-content">
                    <span>{content}</span>
                </div>
            )}
        </div>
    );
};

export default Collapse;
