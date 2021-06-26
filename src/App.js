import React from 'react';
import './assets/css/style.css';
import FirstSection from './components/first-section.jsx';
import SecondSection from './components/second-section.jsx';
import ButtonToTop from './components/button-to-top';

const App = () => {
  return (
    <main>
      <FirstSection/>
      <SecondSection/>
      <ButtonToTop/>
    </main>
  );
}

export default App;