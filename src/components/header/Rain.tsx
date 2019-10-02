import React, { Component } from 'react';
import './Header.scss';

export interface IRainProps {
}
export interface IRainState {
}
export class Rain extends Component<IRainProps, IRainState>{
    render() {
        return (
            <div className='rainBox'>
                <div className='rainSet set1'>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                </div>
                <div className='rainSet set2'>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                </div>
                <div className='rainSet set3'>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                </div>
                <div className='rainSet set4'>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                </div>
                <div className='rainSet set5'>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                    <div className='rain'></div>
                </div>
            </div>
        )
    }
}