
import React from 'react';

const completeDate = new Date();
const thisYear = completeDate.getFullYear();

const Footer = () => {
    return (
        <footer>
            <p>{thisYear} &copy;MPAW</p>
        </footer>
    )
}

export default Footer;