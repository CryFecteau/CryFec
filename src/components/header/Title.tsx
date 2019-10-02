import React, { Component } from 'react';
import './Header.scss';

export interface ITitleProps {
}
export interface ITitleState {
}
export class Title extends Component<ITitleProps, ITitleState>{
    render() {
        return (
            <div className='header'>
                <div className='logo'>
                    <img src='assets/pixelArt/nameLogo.png' alt='name of developer Crystal Fecteau' />
                </div>
                <div className='textBox'>
                    <p>Front-End Engineer</p>
                    <p><span className='text'></span></p>
                </div>
                <div className='city'>
                    <img src='assets/pixelArt/city.png' alt='pixel drawing of seattle' />
                </div>
            </div>
        )
    }
}