import React, { Component } from 'react';
import './HomePage.scss';

export interface IHomePageProps {
}
export interface IHomePageState {
}
export class HomePage extends Component<IHomePageProps, IHomePageState>{
    render() {
        return (
            <div>
                <div className="home-Hearts">
                    <img className='bounce1' src='assets/pixelArt/fullHeart.png' alt='pixel drawing of a heart' />
                    <img className='bounce2' src='assets/pixelArt/fullHeart.png' alt='pixel drawing of a heart' />
                    <img className='bounce3' src='assets/pixelArt/fullHeart.png' alt='pixel drawing of a heart' />
                    <img className='bounce4' src='assets/pixelArt/fullHeart.png' alt='pixel drawing of a heart' />
                    <img className='bounce5' src='assets/pixelArt/emptyHeart.png' alt='pixel drawing of a heart' />
                </div>
                <div className='home-Container'>
                    <div className='home'>
                        <h2>Welcome Player1 To CryHacFec!</h2>
                        <p>This is a portfolio page I created to demonstrate creativity and experience working with CSS, SCSS, React and TypeScript while also sharing my previously made projects like a replica of Joust and Stratego. The assets on this website were also created and designed by me using Piskel, a 2D sprite editor. But my skills don't end there if you would like to know more about me and what I can do to take a look around. Also, don't forget to share it with your friends or family, it's mobile-friendly!</p>
                        <h3>Enjoy!</h3>
                    </div>
                </div>
            </div>

        )
    }
}