import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { NavBar } from './components/navBar/NavBar';
import { Footer } from './components/footer/Footer';
import { Contacts } from './components/contacts/Contacts';



const App: React.FC = () => {
  return (
    <div>
   <Header/>
   <NavBar />
   <Contacts />
   <Footer />
    </div>
  );
}

export default App;
