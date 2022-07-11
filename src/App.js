import './App.css';
import Home from './TaskManager'
import Header from './header'
import Footer from './footer'
import React from 'react'

function App() {

  return (

    <div className='app'>
    <Header />
    <Home />
    <Footer />
    </div>
  );
}

export default App;