import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__left">
                <div className="footer__left-copy">&copy; Built in 2020</div>
            </div>
            <div className="footer__right">
                <div className="footer__right-icons">
                    <div className="footer__right-item">
                        <a className='footer__right-link' target="_blank" rel="noopener noreferrer" href="https://github.com/anyariazantceva?tab=repositories">Anna's github</a>
                    </div>
                    <div className="footer__right-item">
                        <a className="footer__right-link" target="_blank" rel="noopener noreferrer" href="https://github.com/Zionknight-crypto?tab=repositories">David's github</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
