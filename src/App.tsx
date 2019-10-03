import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';
import { Footer } from './components/footer/Footer';
import { Bio } from './components/bio/Bio';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';



const App: React.FC = () => {
  return (
    <div>
   <Header/>
   <NavBar />
  <Skills />
   <Footer />
    </div>
  );
}

export default App;
