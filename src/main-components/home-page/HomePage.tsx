import React, { Component } from 'react';
import './HomePage.scss';

export interface IHomePageProps {
}
export interface IHomePageState {
}
export class HomePage extends Component<IHomePageProps, IHomePageState>{
    render() {
        return (
            <div className='home-Container'>
                <div className="home-Hearts">
                    <img className='bounce1' src='assets/pixelArt/fullHeart.png' alt='pixel drawing of a heart' />
                    <img className='bounce2' src='assets/pixelArt/fullHeart.png' alt='pixel drawing of a heart' />
                    <img className='bounce3' src='assets/pixelArt/fullHeart.png' alt='pixel drawing of a heart' />
                    <img className='bounce4' src='assets/pixelArt/fullHeart.png' alt='pixel drawing of a heart' />
                    <img className='bounce5' src='assets/pixelArt/emptyHeart.png' alt='pixel drawing of a heart' />
                </div>
                <div className='home'>
                    <h2>Welcome To CryHacFec</h2>
                    <span>Hello Player1 and welcome to my portfolio. This website diplays my creativity and love of designing UI and UX. All the assest are drawn by yours truely. Take a look around and let me know what you think. </span>
                    <h3>Enjoy!</h3>
                </div>
            </div>

        )
    }
}