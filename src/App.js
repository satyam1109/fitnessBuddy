import React from 'react';
import './App.css';
import Practise from './components/Practise';
import Exercises from './components/Exercises';
import Ex_details from './components/Ex_details';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Workout from './components/Workout';
import Food from './components/Food';
import Services from './components/Services';
import Supplements from './components/Supplements';
import Pt from './components/Pt'
import Category from './components/Category';


import {Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercises" element={<Exercises/>}/>
        <Route path="/ex_details/:id" element={<Ex_details/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="category/:name" element={<Category/>}/>
        <Route path="/supplements" element={<Supplements/>}/>
        <Route path="/pt" element={<Pt/>}/>
        <Route path="/services" element={<Services/>}/>
        
      </Routes>

      

      <Routes>
        <Route path="/" element={<Exercises/>}/>
       
      </Routes>
     

      {/* <Practise/> */}
      <Footer/>
  
    </div>
  );
}

export default App;
