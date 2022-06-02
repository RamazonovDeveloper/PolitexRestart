import React from 'react';
import Faculty from '../Components/MainPage/Faculty/Faculty';
import Grad from '../Components/MainPage/gradueted/Grad';
import Info from '../Components/MainPage/info/Info';
import Inter from '../Components/MainPage/InteractiveSer/Inter';
import Mslider from '../Components/MainPage/mainSlider/MSlider';
import News from '../Components/MainPage/news/News';
import Video from '../Components/MainPage/videoSection/Video';
import Useful from '../Components/UsefulLinks/Useful'
import Sitemap from '../Components/MainPage/Navbar/siteMap'
import USlider from '../Components/UsefulSlider/USlider'

import "swiper/css/bundle";
import "./styles.css";
import SliderUp from '../Components/MainPage/mainSlider/SliderUp';
const Homeview = () => {
    return (
        <div>
            {/* <Sitemap/>   */}
            <SliderUp/>
            {/* <Mslider/> */}
            <News/>
            <Video/>
            <Faculty/>
            <Grad/>
            <Info/>
            <Inter/>
            {/* <Useful/> */}
            <USlider/>
        </div>
    );
}

export default Homeview;
