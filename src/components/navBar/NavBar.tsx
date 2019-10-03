import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export interface INavBarProps {
}
export interface INavBarState {
}
export class NavBar extends Component<INavBarProps, INavBarState>{
    render() {
        return (
            <div className='navBar-Container'>
                <Link to="/about" className='navBar-links'>About</Link>
                <Link to="/skills" className='navBar-links'>Skills</Link>
                <Link to="/projects" className='navBar-links'>Projects</Link>
                <Link to="/contacts" className='navBar-links'>Contacts</Link>
            </div>
        )
    }
}