import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImage from '../assets/404.png';
import '../css/error.css';

const Error = () => {
    return (
        <section className='section_error'>
            <img className='error_img' src={ErrorImage} alt='error 404' />
            <p className='error_text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='error_link' to='/'>
                Retourner sur la page d'accueil
            </Link>
        </section>
    );
};

export default Error;
