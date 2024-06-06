import React from 'react';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './Components/Intro/Intro';
import Skill from './Components/Skills/Skill';
import Work from './Components/works/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/footers/Footer';


const App = () => {
  return (
    <div className='app'>
      
     <BrowserRouter>
     <Nav/>
     
     </BrowserRouter>
     <Intro/>
     <Skill/>
     <Work/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default App;