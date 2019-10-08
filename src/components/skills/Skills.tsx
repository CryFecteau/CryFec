import React, { Component } from 'react';
import './Skills.scss';

export interface ISkillsProps {
}
export interface ISkillsState {
}
export class Skills extends Component<ISkillsProps, ISkillsState>{
    render() {
        return (
            <div className='skills-Container fade-in'>
                <div className='skills-Bar'></div>
                <div className='skills-Name'>
                    <img src='assets/pixelArt/stats.png' alt='pixel drawing of the word stats' />
                </div>
                <span className='skills-ExperienceBoxHeader'>Level 10 Front-End Engineer</span>
                <div className="skills">
                    <div className="skills-Box">
                        <h3 className='skills-BoxHeader'>Experience:</h3>
                        <div className='skills-ProgressBarContainer'>
                            <div className='skills-ProgressBar'>
                                <span className='skills-ProgressBarFill'>
                                    <p>level 11</p>
                                </span>
                            </div>
                        </div>
                        <div className="skills-BoxGrid">
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/HTML.png' alt='pixel art of html icon' />
                                    <span className='item-ToolText'>HTML</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/CSS.png' alt='pixel art of CSS icon' />
                                    <span className='item-ToolText'>CSS</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img id='Icon' src='assets/icons/Sass.png' alt='pixel art of sass icon' />
                                    <span id='IconText' className='item-ToolText'>Sass/Scss</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/JS.png' alt='pixel art of javascript icon' />
                                    <span className='item-ToolText'>JavaScript</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/TypeScript.png' alt='pixel art of typescript icon' />
                                    <span className='item-ToolText'>TypeScript</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/C.png' alt='pixel art of c# icon' />
                                    <span className='item-ToolText'>C#</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/Mongo.png' alt='pixel art of mongo icon' />
                                    <span className='item-ToolText'>Mongo DB</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/Firebase.png' alt='pixel art of firebase icon' />
                                    <span className='item-ToolText'>Firebase DB</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/Git.png' alt='pixel art of git icon' />
                                    <span className='item-ToolText'>Git</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img id='Icon' src='assets/icons/React.png' alt='pixel art of react icon' />
                                    <span id='IconText' className='item-ToolText'>React</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/Angular.png' alt='pixel art of angular icon' />
                                    <span className='item-ToolText'>Angular</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img id='Icon' src='assets/icons/Unity.png' alt='pixel art of unity icon' />
                                    <span id='IconText' className='item-ToolText'>Unity</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/NodeJs.png' alt='pixel art of node js icon' />
                                    <span className='item-ToolText'>Node JS</span>
                                </div>
                            </div>
                            <div className='gridItem'>
                                <div className='item-HoverBox'>
                                    <img src='assets/icons/Sql.png' alt='pixel art of qql icon' />
                                    <span className='item-ToolText'>MySQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='skills-ExperienceBox'>
                        <span className='skills-BoxHeader'>Stats:</span>
                        <div className="skills-Hearts">
                            <p>Strength: <img className='fullHeart' src='assets/pixelArt/fullHeart.png' alt='8bit heart' /> <img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/halfHeart.png' alt='8bit heart' /> </p>
                            <p>Creativity: <img className='fullHeart' src='assets/pixelArt/fullHeart.png' alt='8bit heart' /> <img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /> </p>
                            <p>Wisdom: <img className='fullHeart' src='assets/pixelArt/fullHeart.png' alt='8bit heart' /> <img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fourthHeart.png' alt='8bit heart' /><img src='assets/pixelArt/emptyHeart.png' alt='8bit heart' /> </p>
                            <p>Confident: <img className='fullHeart' src='assets/pixelArt/fullHeart.png' alt='8bit heart' /> <img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /> </p>
                            <p>Dexterity: <img className='fullHeart' src='assets/pixelArt/fullHeart.png' alt='8bit heart' /> <img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/halfHeart.png' alt='8bit heart' /> </p>
                            <p>Charisma: <img className='fullHeart' src='assets/pixelArt/fullHeart.png' alt='8bit heart' /> <img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/fullHeart.png' alt='8bit heart' /><img src='assets/pixelArt/emptyHeart.png' alt='8bit heart' /> </p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}