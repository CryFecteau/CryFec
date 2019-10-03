import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export interface IFooterProps {
}
export interface IFooterState {
}

export class Footer extends Component<IFooterProps, IFooterState>{
    render() {
        return (
            <div className="footer">
                <div className="footer-Header">
                    <p>Front-End Engineer</p>
                    <h2>Crystal Fecteau</h2>
                </div>
                <div className="footer-Thankyou">
                    <p>Thank you for visting my portfolio!</p>
                    <p>If you're in need of a developer then look no further.</p>
                    <Link to="/contacts" className='footer-btn'>Contacts</Link>
                </div>
                <div className="footer-Links">
                    <a href='https://www.linkedin.com/in/crystal-fecteau/'>Linkedin</a>
                    <a href='https://github.com/CryFecteau'>GitHub</a>
                    <a href='https://docs.google.com/document/d/1-Um12V7WK8lO6fqMMNKAMz8sDQAFjcr46sq5jgWXlVU/edit?usp=sharing'>Resume</a>
                </div>
            </div>
        )
    }
}