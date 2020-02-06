import React from 'react';
import Footer from './functions/Footer';
import Header from './functions/Header';
import Image from './img/plus.png'
import Option from './functions/Option'
import './css/App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="button-1">
          <Option image={Image} buttonName="What is Netflix?" />
        </div>
        <div className="button-1">
          <Option image={Image} buttonName="How much does Netflix cost?" />
        </div>
        <div className="button-1">
          <Option image={Image} buttonName="Where can i watch?" />
        </div>
        <div className="button-1">
          <Option image={Image} buttonName="How does the free trial work?" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
