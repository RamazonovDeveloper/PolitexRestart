import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer';
import Middle from './Components/MainPage/middleMenu/Middle';
import Navbar from './Components/MainPage/Navbar';
import Top from './Components/MainPage/topMenu/Top';
import Homeview from './Pages/HomeView';
import Tuzilma from './Components/Tuzilma/index'
import Universitet from './Components/Universitet/index'
import Talabalar from './Components/Talabalar/index'
import { useState } from 'react';
// import siteMap from './Components/MainPage/Navbar/siteMap'
import Sitemap from './Components/MainPage/Navbar/siteMap';

function App() {

  const [nav, setNav] = useState('')

  let k = 0


  const windowClicked = (el) => {
    console.log('target className =  '+el.target.className)
    console.log('target element parent className would be  =  '+el.target.parentElement.className)
    console.log('target  =  ')
    console.log(el.target);

    if(el.target.parentElement.className.includes('toggle') || el.target.parentElement.className.includes('myNav') || el.target.parentElement.className.includes('navbar')){
      setNav('good')
    }
    else{
      setNav('')
    }

    // if(el.target.className == 'toggle toggle--active'){
    //   setNav('good')
    //   console.log('toggle toggle--active   is   clicked')
    // }else{ 
    //   k++
    //   setNav('')
    //   console.log('toggle toggle--active   is   not   clicked')
    // }
  }





  return (
    <div className="App" onClick={(el) => {windowClicked(el)}}>
     <BrowserRouter>
      <div className='navbarBox'>
        <Top/>
        <Middle/>
        <Navbar open={nav} setopen={setNav}/>
      </div>
      
      <Routes>
        <Route path='/main' element={<Homeview/>}/>
        <Route path='/tuzilma' element={<Tuzilma/>}/>
        <Route className='universitet' path='/universitet' element={<Universitet/>}/>
        <Route path='/talabalar' element={<Talabalar/>}/>
        <Route path='/siteMap' element={<Sitemap/>}/> 
        <Route path='/' element={<Homeview/>}/>
        <Route path='*' element={<Homeview/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App
