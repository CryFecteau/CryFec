import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';
import { Footer } from './components/footer/Footer';

export interface IAppLayoutProps {
}
export interface IAppLayoutState {
}

export class AppLayout extends Component<IAppLayoutProps, IAppLayoutState>{
    render() {
        return (
            <div className='fade-in'>
                <Header />
                <NavBar />
                <main id='mainContent'>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}