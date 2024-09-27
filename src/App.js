import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero/Hero';
import Programs from './component/Programs/Programs';
import Title from './component/Title/Title';
import About from './component/About/About';
import Campus from './component/Campus/Campus';
import Testimonials from './component/Testimonials/Testimonials';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Videoplayer from './component/VideoPlayer/Videoplayer';
import { useState } from 'react';

function App() {

    const [playState,setPlayState]=useState(false)

  return (
    <div className="App">
    <Navbar/>
    <Hero/>

    <div className="container">
    <Title subTitle='Our Program' title='What we Offer'/>

    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subTitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subTitle='TESTIMONIALS' title='Students review'/>
    <Testimonials/>
    <Title subTitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    <Footer/>
   </div>
   <Videoplayer playState={playState} setPlayState={setPlayState}/>
 </div>
  );
}

export default App;
