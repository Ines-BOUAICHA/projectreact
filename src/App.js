import React from 'react';
import { NavBar } from './Components/NavBar';

import './App.css';

import {Profile} from './Components/Profile.js';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
     <NavBar/>
     <Profile/>
     <AboutUs/>
     <Contact/>
    </div>
  );
}

export default App;
