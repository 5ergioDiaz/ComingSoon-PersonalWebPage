import React from 'react';
import { ReactComponent as IconGithub } from '../assets/icons/github.svg';
import { ReactComponent as IconLinkedin } from '../assets/icons/linkedin.svg';
import { ReactComponent as PersonalLogo } from '../assets/icons/Logo.svg';
import "../App.css";

export const Card = () => {
    return (
        <div className="card">
            <div className="header">
                <div className="logo">
                    <a href="https://sergiodiaz.dev" title="Personal Page" target="_blank" rel="noopener noreferrer">
                        <PersonalLogo className="icon" />
                    </a>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/5erg10/" title="Linkedin" target="_blank" rel="noopener noreferrer">
                        <IconLinkedin className="icon" />
                    </a>
                    <a href="https://github.com/5ergioDiaz" title="GitHub" target="_blank" rel="noopener noreferrer">
                        <IconGithub className="icon" />
                    </a>
                </div>
            </div>
            <div className="content">
                <div className="title-holder">
                    <h1>Sergio Diaz</h1>
                    <h1>React | React Native Developer</h1>
                    <p>Website coming soon. Please check back to know more</p>
                </div>
                {/* <a href="mailto:sergiojulian1998@outlook.com">
                    <div className="cta">Send me an email</div>
                </a> */}
            </div>
            <div className="footer">
                <span>
                    <a className="underlined" href="https://github.com" title="GitHub repo" target="_blank" rel="noopener noreferrer"> </a></span>
            </div>
        </div>
    );
}
