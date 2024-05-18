import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Menu className="menu1">HOME</Menu>
        <Menu className="menu2">GALLERY</Menu>
        <Menu className="menu3">BLOG</Menu>
        <Menu className="menu4">KNET</Menu>
      </nav>
      <MainContent />
    </div>
  );
}

export default App;
