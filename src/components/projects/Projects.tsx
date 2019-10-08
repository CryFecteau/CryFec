import React, { Component } from 'react';
import './Projects.scss';

export interface IProjectsProps {
}
export interface IProjectsState {
}
export class Projects extends Component<IProjectsProps, IProjectsState>{
    render() {
        return (
            <div className='fade-in'>
                <div className='projects-Bar'></div>
                <div className='projects-Name'>
                    <img src='assets/pixelArt/project.png' alt='pixel drawing of the word projects' />
                </div>
                <div className="projects-Descript">
                    <p>Here are a few of my favorite projects I have made working in a team.</p>
                    <ul>
                        <li>Joust: two-player game that lets you fly around with your friend and lance enemies... or your friend (no judgment)</li>
                        <br />
                        <li>Stratego: two-player strategy game that is a mix of chess, checkers, and luck (yes we got the inspiration from the actual board game)</li>
                        <br />
                        <li>Zombit Tavern: a place where zombies can live their best lives by drinking a beer or two</li>
                        <br />
                        <li>DnD Character Generator: choose your name, gender, and race to see your new character image and stats</li>
                    </ul>
                    <p>Go ahead and test them out!</p>
                </div>
                <div className="projects">
                    <div className='projects-Container'>
                        <div className="joust-Container">
                            <div className='slider' id='joust'>
                                <img className='slider-Img' src='assets/screenShots/joust1.png' alt='screen shot of joust game' />
                                <img className='slider-Img' src='assets/screenShots/joust2.png' alt='screen shot of joust game' />
                                <img className='slider-Img' src='assets/screenShots/joust3.png' alt='screen shot of joust game' />
                                <div className='overlay'>
                                    <div className='popText'>
                                        <a target="_blank" href='https://dtpc22.github.io/joust/'>Jump Back In Time To The 80's</a>
                                    </div>
                                </div>
                                <div className='projects-Box'></div>
                                <div className='detailBox'>
                                    <span>Joust</span>
                                    <p>80's inspired two player aracde game.</p>
                                    <a target="_blank" href='https://dtpc22.github.io/joust/'>Deployed App</a><br />
                                    <a target="_blank" href='https://github.com/CryFecteau/joust'>GitHub Code</a>
                                </div>
                            </div>
                            <div className="toolBox">
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/HTML.png' alt='pixel art of html icon' />
                                    <span className='item-ToolTextProjs'>HTML</span>
                                </div>
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/CSS.png' alt='pixel art of css icon' />
                                    <span className='item-ToolTextProjs'>CSS</span>
                                </div>
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/JS.png' alt='pixel art of javascripticon' />
                                    <span className='item-ToolTextProjs'>JavaScript</span>
                                </div>
                            </div>
                        </div>
                        <div className="stratego-Container">
                            <div className='slider' id='stratego'>
                                <img className='slider-Img' src='assets/screenShots/stratego1.png' alt='screen shot of stratego game' />
                                <img className='slider-Img' src='assets/screenShots/stratego2.png' alt='screen shot of stratego game' />
                                <img className='slider-Img' src='assets/screenShots/stratego3.png' alt='screen shot of stratego game' />
                                <div className='overlay'>
                                    <div className='popText'>
                                        <a target="_blank" href='https://stratego-57462.firebaseapp.com/'>Challegne Your Friends To A Strategy Game</a>
                                    </div>
                                </div>
                                <div className='projects-Box'></div>
                                <div className='detailBox detail'>
                                    <span>Stratego</span>
                                    <p>Strategy inspired two player board game.</p>
                                    <a target="_blank" href='https://stratego-57462.firebaseapp.com/'>Delpoy App</a><br />
                                    <a target="_blank" href='https://github.com/CryFecteau/stratego'>GitHub code</a>
                                </div>
                            </div>
                            <div className="toolBox">
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/HTML.png' alt='pixel art of html icon' />
                                    <span className='item-ToolTextProjs'>HTML</span>
                                </div>
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/CSS.png' alt='pixel art of css icon' />
                                    <span className='item-ToolTextProjs'>CSS</span>
                                </div>
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/JS.png' alt='pixel art of javascript icon' />
                                    <span className='item-ToolTextProjs'>JavaScript</span>
                                </div>
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/Angular.png' alt='pixel art of angular icon' />
                                    <span className='item-ToolTextProjs'>Angular</span>
                                </div>
                                <div className='item-HoverBoxProjs icon'>
                                    <img src='assets/icons/Firebase.png' alt='pixel art of firebase icon' />
                                    <span className='item-ToolTextProjs'>Firebase</span>
                                </div>
                            </div>
                        </div>
                        <div className="zombit-Container">
                            <div className='slider' id='zombit'>
                                <img className='slider-Img' src='assets/screenShots/zombit1.png' alt='screen shot of zombit tavern' />
                                <img className='slider-Img' src='assets/screenShots/zombit2.png' alt='screen shot of zombit tavern' />
                                <img className='slider-Img' src='assets/screenShots/zombit3.png' alt='screen shot of zombit tavern' />
                                <div className='overlay'>
                                    <div className='popText'>
                                        <a target="_blank" href='https://cryfecteau.github.io/tap-room/'>Join The Zombies For A Drink</a>
                                    </div>
                                </div>
                                <div className='projects-Box'></div>
                                <div className='detailBox detail'>
                                    <span>Zombit Tavern</span>
                                    <p>Web-site that mixes love the of zombies and beer together.</p>
                                    <a target="_blank" href='https://cryfecteau.github.io/tap-room/'>Deployed App</a><br />
                                    <a target="_blank" href='https://github.com/CryFecteau/tap-room'>GitHub Code</a>
                                </div>
                            </div>
                            <div className="toolBox">
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/JSX.png' alt='pixel art of jsx icon' />
                                    <span className='item-ToolTextProjs'>JXS</span>
                                </div>
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/CSS.png' alt='pixel art of css icon' />
                                    <span className='item-ToolTextProjs'>CSS</span>
                                </div>
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/JS.png' alt='pixel art of javascript icon' />
                                    <span className='item-ToolTextProjs'>JavaScript</span>
                                </div>
                                <div className='item-HoverBoxProjs icon'>
                                    <img src='assets/icons/React.png' alt='pixel art of react icon' />
                                    <span className='item-ToolTextProjs'>React</span>
                                </div>
                            </div>
                        </div>
                        <div className="dnd-Container">
                            <div className='slider' id='dnd'>
                                <img className='slider-Img' src='assets/screenShots/dnd1.png' alt='screen schot of dnd creator' />
                                <img className='slider-Img' src='assets/screenShots/dnd2.png' alt='screen schot of dnd creator' />
                                <img className='slider-Img' src='assets/screenShots/dnd3.png' alt='screen schot of dnd creator' />
                                <div className='overlay'>
                                    <div className='popText'>
                                        <a target="_blank" href='https://cryfecteau.github.io/DnD/'>Create Your DnD Character</a>
                                    </div>
                                </div>
                                <div className='projects-Box'></div>
                                <div className='detailBox detail'>
                                    <span>DnD Genarator</span>
                                    <p>DnD character genarator for thier class and stats.</p>
                                    <a target="_blank" href='https://cryfecteau.github.io/DnD/'>Delpoy App</a><br />
                                    <a target="_blank" href='https://github.com/CryFecteau/DnD'>GitHub Code</a>
                                </div>
                            </div>
                            <div className="toolBox">
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/HTML.png' alt='pixel art of html icon' />
                                    <span className='item-ToolTextProjs'>HTML</span>
                                </div>
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/CSS.png' alt='pixel art of css icon' />
                                    <span className='item-ToolTextProjs'>CSS</span>
                                </div>
                                <div className='item-HoverBoxProjs'>
                                    <img src='assets/icons/JS.png' alt='pixel art of javascript icon' />
                                    <span className='item-ToolTextProjs'>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timeline-Container">

                    <div className="timeline-Header">
                        <h2>Steps taken to produce a project</h2>
                    </div>
                    <div className="timeline-Bar"></div>
                    <div className="timeline">
                        <div className="timeline-Step">
                            <h3>Start!</h3>
                        </div>
                        <div className="timeline-Step">
                            <h3>Strategize</h3>
                            <p>Discuss ideas and goals</p>
                        </div>
                        <div className="timeline-Step">
                            <h3>Research</h3>
                            <p>Research if idea has been made</p>
                        </div>
                        <div className="timeline-Step">
                            <h3>Outline/Sketch</h3>
                            <p>Break how the application should function and look</p>
                        </div>
                        <div className="timeline-Step">
                            <h3>Server-Side</h3>
                            <p>Program necessary logic</p>
                        </div>
                        <div className="timeline-Step">
                            <h3>Test</h3>
                            <p>Test functionality</p>
                        </div>
                        <div className="timeline-Step">
                            <h3>Design</h3>
                            <p>Create/gather assets</p>
                        </div>
                        <div className="timeline-Step">
                            <h3>Review</h3>
                            <p>Disscus/approve assets</p>
                        </div>
                        <div className="timeline-Step">
                            <h3>Client-Side</h3>
                            <p>Input design and conncet to server-side</p>
                        </div>
                        <div className="timeline-Step">
                            <h3>Test</h3>
                            <p>Test the functionality with UI/UX</p>
                        </div>
                        <div className="timeline-Step">
                            <h3>Refactor</h3>
                            <p>Refactor Client/Server-Side and test</p>
                        </div>
                        <div className="timeline-Step">
                            <h3>Launch!</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}