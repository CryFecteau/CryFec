import React, { Component } from 'react';
import './Header.scss';

export interface ICloudsProps {
}
export interface ICloudsState {
}
export class Clouds extends Component<ICloudsProps, ICloudsState> {
    render() {
        return (
            <div className='cloudBox'>
                <div className='clouds cloud-set c-set1'>
                    <div><img src='assets/pixelArt/stromCloud1.png' alt='pixel storm cloud' /></div>
                    <div><img src='assets/pixelArt/stromCloud2.png' alt='pixel storm cloud' /></div>
                    <div><img src='assets/pixelArt/stromCloud3.png' alt='pixel storm cloud' /></div>
                </div>
                <div className='clouds cloud-set c-set2'>
                    <div><img src='assets/pixelArt/stromCloud1.png' alt='pixel storm cloud' /></div>
                    <div><img src='assets/pixelArt/stromCloud2.png' alt='pixel storm cloud' /></div>
                    <div><img src='assets/pixelArt/stromCloud3.png' alt='pixel storm cloud' /></div>
                </div>
            </div>
        );
    }
}