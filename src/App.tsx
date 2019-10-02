import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';
import { HomePage } from './main-components/home-page/HomePage';
import { Footer } from './components/footer/Footer';



const App: React.FC = () => {
  return (
    <div>
   <Header/>
   <NavBar />
   <HomePage />
   <Footer />
    </div>
  );
}

export default App;
