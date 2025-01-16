import React from 'react';
import Project from './pastproject/Project'
import './home.css'
import noun from '../../assets/noun.png'
import adj from  '../../assets/adj.png'
import verb from '../../assets/vreb.png'
import first from '../../assets/image.jpg'

const Home = () => {
  return (
    <div>
      <div className='home-area'>
          <div className="welcome__contianer">
            <span> <h1 className="welcome">Wendy Ju</h1></span>
          </div>
          <div id="welcome__body">
          <div className="welc__main">
            <img className='logos' src= {noun} alt='a logo'/>
            <p className="welcome__top">noun.</p>        
            product designer,<br/> visual storyteller
        </div>
        <div class="welc__main">
            <img className='logos' src= {adj} alt='a logo'/>
           <p class="welcome__top">adj.</p> 
            curious, caring,<br/> detail-oriented
        </div>
        <div class="welc__main">
            <img className='logos' src={verb} alt='a logo'/>
            <p class="welcome__top">verb.</p>
            raises thoughtful<br/> questions to challenge<br/> norms
        </div>
        </div>  
        <div>
          <img className='fisrtpic' src={first} alt='picture of a screen'/>
        </div> 
      </div>
      <div>
        <Project /> 
      </div>
    </div>
  );
}

export default Home;
