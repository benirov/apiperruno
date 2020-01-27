import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import MainHeader from './MainHeader';
import InfoPage from './InfoPage';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <InfoPage />
        <Footer />
      </div>
    );
  }
}

export default App;
