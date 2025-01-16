import React from 'react';
import Project from './pastproject/Project'
import './home.css'

const Home = () => {
  return (
    <div>
      <div className='home-area'>
          <div className="welcome__contianer">
            <span> <h1 className="welcome">Wendy Ju</h1></span>
          </div>
           
      </div>
      <div>
        <Project /> 
      </div>
    </div>
  );
}

export default Home;
