import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Quit.scss';

export interface IQuitProps {
}
export interface IQuitState {
}

export class Quit extends Component<IQuitProps, IQuitState>{
    render() {
        return (
            <div className='quit fade-in'>
                <img src='assets/pixelArt/GameOver.png' alt="pixel art of the words game over" />
                <div className="quit-Text">
                    <p>Select Start To Try Again</p>
                    <Link to='/home' className='quit-Link'>Start</Link>
                </div>
            </div>
        )
    }
}