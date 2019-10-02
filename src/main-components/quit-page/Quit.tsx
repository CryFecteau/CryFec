import React, { Component } from 'react';
import './Quit.scss';

export interface IQuitProps {
}
export interface IQuitState {
}

export class Quit extends Component<IQuitProps, IQuitState>{
    render() {
        return (
            <div className='quit'>
                <img src='assets/pixelArt/GameOver.png' alt="pixel art of the words game over" />
                <div className="quit-Text">
                    <p>Select Start To Try Again</p>
                    <a className='quit-Link'>Start</a>
                </div>
            </div>
        )
    }
}