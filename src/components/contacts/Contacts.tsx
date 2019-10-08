import React, { Component } from 'react';
import './Contacts.scss';

export interface IContactsProps {
}
export interface IContactsState {
}
export class Contacts extends Component<IContactsProps, IContactsState>{
    render() {
        return (
            <div className='contacts fade-in'>
                <div className="contacts-Header">
                    <h1>Let's Chat!</h1>
                </div>
                <div className="contacts-BitFace">
                    <img src='/assets/pixelArt/me.png' alt="pixel art of devloper face" />
                </div>
                <div className='contacts-Box'>
                    <div className="contacts-InfoContainer">
                        <a target='_blank' href='https://cry.fecteau@gmail.com'>
                            <p><img id='emailIcon' src='assets/icons/email.png' alt="icon for email" />Email: Cry.Fecteau@gmail.com</p>
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/in/crystal-fecteau/'>
                            <p><img src='assets/icons/linkedin.png' alt="icon for linkedin" />Linkedin: Crystal Fecteau</p>
                        </a>
                        <a target='_blank' href='https://github.com/CryFecteau'>
                            <p><img src='assets/icons/github.png' alt="icon for github" />GitHub: CryFecteau</p>
                        </a>
                        <a target='_blank' href='https://docs.google.com/document/d/1S61E9ex96S6Fe_CR1XwW8YPUDYG3UeCpF-SXa733k6U/edit?usp=sharing'>
                            <p><img src='assets/icons/resume.png' alt="icon for resume" />Resume: Front-end Engineer</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}