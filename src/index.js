import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import Home from './home';
import About from './about';
import Features from './features';
import TaskManager from './TaskManager';
import './App.css';

const Index = ({ pathname }) => {
  switch (pathname) {
    case '/about':
      return <About />;
    case '/features':
      return <Features />;
    case '/home':
      return <Home />  
    default:
      return <TaskManager />;
  }};


let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});
export default Index;

