import React, { Component } from 'react';
import './Bio.scss';

export interface IBioProps{
}
export interface IBioState{
}
export class Bio extends Component<IBioProps, IBioState>{
    render(){
        return(
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
                                <img className='item-Boots' src='assets/pixelArt/boots.png'alt='pixel art of doc boots' />
                                <span className='item-ToolTextBio'>Doc Boots +10 Dexterity</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bio-MediaBox">
                    <div className='bio-Media'>
                        <a href='https://docs.google.com/document/d/1-Um12V7WK8lO6fqMMNKAMz8sDQAFjcr46sq5jgWXlVU/edit?usp=sharing'><img src='assets/icons/resume.png' alt='icon for resume' /></a>
                        <a href='https://cry.fecteau@gmail.com'><img id="email" src='assets/icons/email.png' alt='icon for email' /></a>
                        <a href='https://github.com/CryFecteau'><img src='assets/icons/github.png' alt='icon for github' /></a>
                        <a href='https://www.linkedin.com/in/crystal-fecteau/'><img src='assets/icons/linkedin.png' alt='icon for Linkedin' /></a>
                    </div>
                </div>
            </div>
            <div className='bio-TextBox'>
                <p className='bio-Header'>Bio</p>
                <p>My name is Crystal Fecteau and I taken my love of creating intricate pastries and converted it into my new love of programming and designing. I have been a pastry chef for seven plus years now, but wanted a change in my career so I decided to pursue a old passion of creating beautiful functional websites and games. I have created mulitple projects using languages from JS to C# and loved every moment of it. There's so much to learn and I can't wait till what the next project will teach me. </p>
                <p className='bio-Header'>Why CryHaFec?</p>
                <p>"Release to dogs of war!" When I have an idea, no matter big or small, I follow through with it. I am a controlled chaos of ideas, who is also open to critique. I'm here to learn and grow with each expierence while preparing myself for the next challenge.</p>
                <p>Also CryHaFec is just a great nickname.</p>
            </div>
        </div>
        )
    }
}