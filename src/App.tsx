import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';
import { Footer } from './components/footer/Footer';
import { Bio } from './components/bio/Bio';



const App: React.FC = () => {
  return (
    <div>
   <Header/>
   <NavBar />
   <Bio />
   <Footer />
    </div>
  );
}

export default App;
