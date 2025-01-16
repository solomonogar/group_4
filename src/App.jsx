import React from 'react'
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Menubar from './components/home/menu bar/Menu';
import Resume from './components/resume/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Menu from './components/home/menu bar/Menu';
const App = () => {
  return (
    <main className='main_container'>
     <Router>
        <Menu />
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='Menubar' element={<Menubar/>}/> */}
        <Route path='About' element={<About/>}/>
        <Route path='Resume' element={<Resume/>}/>
        {/* <Route path='Footer' element={<Footer/>}/> */}

      </Routes>
     </Router>

     <Footer/>
    </main>
  )
}

export default App

