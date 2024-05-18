import React from 'react';
import '../styles/MainContent.css';
import Svg1 from './Svg1';
import Svg2 from './Svg2';

const MainContent = () => (
  <div>
    <div className="div1">
      KOALA 
      <span>INTELLIGENCE</span>
      AGENCY
    </div>
    <img className="img2" src="/assets/Koala.png" alt="Koala" />
    <div className="div2">
      A collection of 10,000 worldly Koalas each with their unique skillsets. Their mission is to protect the world from evil.
    </div>
    <Svg1 />
    <Svg2/>
  </div>
);

export default MainContent;
