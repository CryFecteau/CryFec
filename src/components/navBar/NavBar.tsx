import React, { Component } from 'react';
import './NavBar.scss';

export interface INavBarProps {
}
export interface INavBarState {
}
export class NavBar extends Component<INavBarProps, INavBarState>{
    render() {
        return (
            <div className='navBar-Container'>
                <a  className='navBar-links'>About</a>
                <a  className='navBar-links'>Skills</a>
                <a  className='navBar-links'>Projects</a>
                <a  className='navBar-links'>Contacts</a>
            </div>
        )
    }
}