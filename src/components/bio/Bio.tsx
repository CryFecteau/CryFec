import React, { Component } from 'react';
import './Bio.scss';

export interface IBioProps {
}
export interface IBioState {
}
export class Bio extends Component<IBioProps, IBioState>{
    render() {
        return (
            <div className='fade-in'>
                <div className='name-Container'>
                    <div className='name-Bar'></div>
                    <div className='name'>
                        <img src='assets/pixelArt/name.png' alt='name of developer Crystal Fecteau' />
                    </div>
                </div>
                <div className='bio'>
                    <div className='bio-Container'>
                        <p className='bio-Header'>Level 10</p>
                        <p>Jr. Front-End Engineer</p>
                        <div className='bio-ToolBit'>
                            <img className='bio-BitMe' src='assets/pixelArt/bitMe.png' alt='pixel art of developer' />
                            <span className='bio-BitMeText'>Hey! Welcome to my portfolio!</span>
                        </div>
                        <div className='item-Container'>
                            <div className='item-BoxBio'>
                                <div className='item-HoverBoxBio'>
                                    <img id='item-Glasses' src='assets/pixelArt/glasses.png' alt='pixel art of glasses' />
                                    <span className='item-ToolTextBio'>Glasses +10 Wisdom</span>
                                </div>
                            </div>
                            <div className='item-BoxBio'>
                                <div className='item-HoverBoxBio'>
                                    <img className='item-Computer' src='assets/pixelArt/computer.png' alt='pixel art a laptop' />
                                    <span className='item-ToolTextBio'>Laptop +10 Intelligence</span>
                                </div>
                            </div>
                            <div className='item-BoxBio'>
                                <div className='item-HoverBoxBio'>
                                    <img className='item-Boots' src='assets/pixelArt/boots.png' alt='pixel art of doc boots' />
                                    <span className='item-ToolTextBio'>Doc Boots +10 Dexterity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bio-MediaBox">
                        <div className='bio-Media'>
                            <a target='_blank' href='https://docs.google.com/document/d/1S61E9ex96S6Fe_CR1XwW8YPUDYG3UeCpF-SXa733k6U/edit?usp=sharing'><img src='assets/icons/resume.png' alt='icon for resume' /></a>
                            <a target='_blank' href='https://cry.fecteau@gmail.com'><img id="email" src='assets/icons/email.png' alt='icon for email' /></a>
                            <a target='_blank' href='https://github.com/CryFecteau'><img src='assets/icons/github.png' alt='icon for github' /></a>
                            <a target='_blank' href='https://www.linkedin.com/in/crystal-fecteau/'><img src='assets/icons/linkedin.png' alt='icon for Linkedin' /></a>
                        </div>
                    </div>
                </div>
                <div className='bio-TextBox'>
                    <p className='bio-Header'>Bio</p>
                    <p>I am Crystal Fecteau, a level 25 woman living in the beautiful city of Seattle, WA. I have taken my love of creating intricate pastries and converted it into my new love of programming and designing.  I have been a pastry chef for seven-plus years so I have developed a strong attention to detail. Although I enjoyed being a chef, I wanted a change in my career. I decided to pursue an old passion for creating beautiful functional websites and games.  Being able to design things down to every last detail is what I do best. Being able to program logic that users can easily interact with is what keeps me hungry for more knowledge and tools to create the next application. There's so much to learn and I can't wait what the next project will teach me.</p>
                    <p className='bio-Header'>Why CryHaFec?</p>
                    <p>"Release to dogs of war!" I am a controlled chaos of ideas and hidden talents; who is open to all feedback. So don't worry, I bring kindness and only wreak havoc on my laptop when it doesn't compile my code correctly...</p>
                    <p>Also CryHaFec is just a great nickname.</p>
                </div>
            </div>
        )
    }
}