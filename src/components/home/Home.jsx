import React from 'react';
import Project from './pastproject/Project'
import './home.css'
import noun from '../../assets/noun.png'
import adj from  '../../assets/adj.png'
import verb from '../../assets/vreb.png'
import first from '../../assets/image.jpg'
import second from '../../assets/image2.png'
import third from '../../assets/image3.png'
import forth from '../../assets/image4.png'

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
        <div className='client-contianer'>
          <div className='client-main'>
            <p className='client'><b>Client: inQ Services</b></p>
            <div className='increase'>Increasing operational efficiency in facilities management</div>
            <div className='product'>0-to-1 Product Design   |   SaaS Platform  <br/>|  Web Design  |
            AppDesign  |<br/>  Stakeholder Management</div>
          </div>
          <img className='fisrtpic' src={first} alt='picture of a screen'/>
        </div>
        <div className='empower-contianer'>
            <img className='secondpic' src={second} alt='picture of a screen'/>
          <div className='empower-main'>
            <div className='empower'>Empowering female solo<br/> travelers with <br/>
            trustworthy and <br/>
              relevant safety<br/> information</div>
            <div className='product'> Web Design  
               |   Material Design   |   UX <br/> Design</div>
           </div>
        </div> 
        <div className='enhance-contianer'>
     <div className='enhance-main'>
          <p className='client'><b>Client: Guardian Life</b></p>

          <div className='increase'>Enhancing financial planning 
          experience through rebranding</div> 
          <div className='product'> Visual Design  |   Responsive Design
              | <br/> Rebranding</div>
      </div>    
          <img className='thirdpic' src={third} alt='a picture of a man smiling'/>
        </div>
        <div className='increase-contianer'>
          <img className='forthpic' src= {forth} alt='picture of a phone' />
          <div className='increase-main'>
          <div className='increasing'>Increasing motivation<br/> in young adults
           to form<br/> long 
          term<br/> habits through<br/> gamification</div>
          <div className='product'>Physical Product   |   App Design   | <br/>
            Interaction Design   |   UX Research</div>
          </div>
        </div>

      </div>
      <div>
        <Project /> 
      </div>
    </div>
  );
}

export default Home;
