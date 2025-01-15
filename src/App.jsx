import React from 'react'
import About from './components/about/About';
import footer from './components/footer/footer';
import Home from './components/home/Home';
import Menubar from './components/home/menu bar/Menu';
import Resume from './components/resume/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
const App = () => {
  return (
    <main className='main_container'>
     {/* <Work/>
     <About/>
     <Resume/>
     <Header/>
     <Footer/> */}
     <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Menubar' element={<Menubar/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Resume' element={<Resume/>}/>
        <Route path='footer' element={<footer/>}/>
      </Routes>
     </Router>
     
    </main>
  )
}

export default App

