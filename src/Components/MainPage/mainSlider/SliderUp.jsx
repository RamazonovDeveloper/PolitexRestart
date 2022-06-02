
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import back from '../../../assets/images/slider-back.png'

import "./SliderUp.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderUp() {

    const [top, setTop] = useState([])


    useEffect(() => {
        const myFunc = async() => {
            const topProm = await fetch('https://politexapi.na4u.ru/api/news')
            
            const promJson = await topProm.json()
            console.log(promJson)
    
            console.log('res bu  ',promJson)
    
            setTop(promJson.data)

        }

        myFunc()    
    },[])
    
    console.log('top bu  ' ,top)

  return (
    <div className="mySlide">
    <div className='mySlide__back'>
        <img className='mySlide__back__img' src={back} alt="" />
    </div>
      <Swiper
        spaceBetween={300}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: false,
        // }}
        navigation={false}
        modules={[Autoplay]}
        // modules={[Autoplay, Pagination, Navigation]}
        className="myContainer mySwiper "
      >

          {
              top.map((element, index)=>{
                return <SwiperSlide className="mySwiperSlide">
                    <div className="myDiv">
                        <h4 dangerouslySetInnerHTML={{__html:element.title_uz}}></h4>
                        <p dangerouslySetInnerHTML={{__html:element.text_uz}}></p>
                    </div>
                    <img className="myImg" src={'https://politexapi.na4u.ru/public/storage/'+element.image_2} alt="" />
                </SwiperSlide>
              })
          }
        {/* <SwiperSlide>Salom</SwiperSlide>
        <SwiperSlide>Salom Alik</SwiperSlide> */}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
