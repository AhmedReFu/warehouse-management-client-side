import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
            <p className='pt-2 fs-2'><small>CopyRight From MD. NAZMUL &copy; {year} </small></p>
        </footer>
    );
};

export default Footer;