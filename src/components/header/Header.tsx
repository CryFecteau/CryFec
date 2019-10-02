import React, { Component } from 'react';
import { Clouds } from './Clouds';
import { Rain } from './Rain';
import { Title } from './Title';
import './Header.scss'

export interface IHeaderProps {
}
export interface IHeaderState {
}

export class Header extends Component<IHeaderProps, IHeaderState> {
    render() {
        return (
            <div className='Header'>
                <Rain />
                <Clouds />
                <Title />
            </div>
        )
    }
}