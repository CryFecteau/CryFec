import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';



const App: React.FC = () => {
  return (
    <div>
   <Header/>
   <NavBar />
    </div>
  );
}

export default App;
