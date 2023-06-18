
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Route, Link, Routes,} from 'react-router-dom';
import CC from './components/cc/cc';
import CC2 from './components/cc/cc2';
import CC3 from './components/cc/cc3';
import CC4 from './components/cc/cc4';
function Home(){
  return(
    <div>
      <Header/>
      <List/>
      <Footer/>
    </div>
  )
}

function App() {
 
  return (
   <div>
<Router>
  
        <Routes>
    
          <Route path='/' element={<Home/>}/>
          <Route path='/cc' element={<CC/>}/>
          <Route path='/cc2' element={<CC2/>}/>
          <Route path='/cc3' element={<CC3/>}/>
          <Route path='/cc4' element={<CC4/>}/>
      
        </Routes>
      </Router>
        
</div>
  );
}

export default App;
