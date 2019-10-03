import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';
import { Footer } from './components/footer/Footer';
import { Bio } from './components/bio/Bio';
import { Projects } from './components/projects/Projects';



const App: React.FC = () => {
  return (
    <div>
   <Header/>
   <NavBar />
  <Projects />
   <Footer />
    </div>
  );
}

export default App;
