import React, { Component } from 'react';
import './StartPage.scss';


export interface IStartPageProps {
}
export interface IStartPageState {
}
export class StartPage extends Component<IStartPageProps, IStartPageState>{
    public render() {
        return (
            <div className='fade-in-Start'>
                <div className='startPage-Header'>
                    <p>Player 1</p>
                    <p>2 Credits</p>
                </div>
                <div className='startPage'>
                    <div className='startPage-Portfolio'>
                        <img src='assets/pixelArt/portfolio.png' alt='pixel drawing of crystal fecteau portfolio' />
                    </div>
                    <div className='startPage-Clouds'>
                        <img src='assets/pixelArt/stromCloud1.png' alt='pixel storm cloud' />
                        <img src='assets/pixelArt/stromCloud2.png' alt='pixel storm cloud' />
                        <img src='assets/pixelArt/stromCloud3.png' alt='pixel storm cloud' />
                        <img src='assets/pixelArt/stromCloud1.png' alt='pixel storm cloud' />
                    </div>
                        <div className='startPage-SunSet'>
                            <img className='startPage-CitySunSet' src='assets/pixelArt/city.png' alt='pixel city with a calming sunset' />
                        </div>
                    <div className='startPage-Opitions'>
                        <a  className='link'>Start</a>
                        <a  className='link'>Quit</a>
                    </div>
                </div>
            </div>
        );
    }
}