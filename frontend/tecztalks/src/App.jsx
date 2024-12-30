import React from 'react';
import './styles/app.css';
import TechNews from './TechNews';

const App = () => {
  return (
    <>
      <div>
        <div className="header">
          <div>
            <div><strong>Thursday, December 19, 2024</strong></div>
            <div className="left"><strong>Today’s News</strong></div>
          </div>
          <div>
            <div className="middle"><span>International</span> <span> | </span> <span>India</span></div>
          </div>
          <div>
            <div>Temperature</div>
            <div>Location</div>
          </div>
        </div>
        <div className="title"><h1>TeczTalks</h1></div>
      </div>

      <TechNews />
    </>
  );
};

export default App;
