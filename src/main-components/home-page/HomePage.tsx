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
                    <h2>Welcome Player1 To CryHacFec!</h2>
                    <p>This is a portfolio page to demonstrate my creativity by drawing and designing the assets you see before you as well as experience working with CSS, SCSS, React and TypeScript. But my skills don't end there if you would like to know more about me take a look around. Also, don't forget to share it with your friends or family, it mobile friendly!</p>
                    <h3>Enjoy!</h3>
                </div>
            </div>
        )
    }
}