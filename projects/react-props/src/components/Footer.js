
import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <p>{currentYear} &copy;MPAW</p>
        </footer>
    )
};

export default Footer;