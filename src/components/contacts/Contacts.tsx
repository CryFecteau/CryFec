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
                        <a href='https://cry.fecteau@gmail.com'>
                            <p><img id='emailIcon' src='assets/icons/email.png' alt="icon for email" />Email: Cry.Fecteau@gmail.com</p>
                        </a>
                        <a href='https://www.linkedin.com/in/crystal-fecteau/'>
                            <p><img src='assets/icons/linkedin.png' alt="icon for linkedin" />Linkedin: Crystal Fecteau</p>
                        </a>
                        <a href='https://github.com/CryFecteau'>
                            <p><img src='assets/icons/github.png' alt="icon for github" />GitHub: CryFecteau</p>
                        </a>
                        <a href='https://docs.google.com/document/d/1-Um12V7WK8lO6fqMMNKAMz8sDQAFjcr46sq5jgWXlVU/edit?usp=sharing'>
                            <p><img src='assets/icons/resume.png' alt="icon for resume" />Resume: Front-end Engineer</p>
                        </a>
                        <p><img src='assets/icons/cellphone.png' alt="icon for cell phone" />Cell: (562)760-7099</p>
                    </div>
                </div>
            </div>
        )
    }
}