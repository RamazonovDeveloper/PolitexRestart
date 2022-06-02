import React, { useEffect, useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import img from '../../assets/img/loginBack.png'
// import first from '../../assets/img/dtmLogo.png'
// import second from '../../assets/img/mygovlogo.png'
// import third from '../../assets/img/yoshlogo.png'

import './USlider.scss'
import { useNavigate } from 'react-router';

// import './styles.css';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function App() {

    const [top, setTop] = useState([])

    const navigate = useNavigate()

    // https://politexapi.na4u.ru/api/news\\May2022\\pFCFX9ddX9qs0xGbK2dx.png

    useEffect(() => {
        const myFunc = async() => {
            const topProm = await fetch('https://politexapi.na4u.ru/public/api/usefullinks')
            
            const promJson = await topProm.json()
            console.log(promJson)
    
            console.log('res bu  ',promJson)
    
            setTop(promJson.data)
    
    
            // fetch('https://omdbapi.com/?i=tt3896198&apikey=4b545227&s=iron')
            // .then(res => res.json())
            // .then(res => {console.log('res bu  ',res)})
            // .then(res => {setTop(res)})
            // .catch(err => {console.log(err)})
    
        }

        myFunc()    
    },[])
    
    console.log('top bu Useful link ichidagi ' ,top)



    // const mockData=[
    //     {
    //         "id": 1,
    //         "img":'salom',
    //         "text_uz": "Davtlat  test markazi",
    //         "address": "https://dtm.uz/",
    //     },
    //     {
    //         "id": 2,
    //         "img":'salom',
    //         "text_uz": "Davtlat  test markazi",
    //         "address": "https://dtm.uz/",
    //     },
    //     {
    //         "id": 4,
    //         "img":'salom',
    //         "text_uz": "Davtlat  test markazi",
    //         "address": "https://dtm.uz/",
    //     },
    //     {
    //         "id": 3,
    //         "img":'salom',
    //         "text_uz": "My Gov",
    //         "address": "https://dtm.uz/",
    //     },
        
    //     {
    //         "id": 5,
    //         "img":'salom',
    //         "text_uz": "Davtlat  test markazi",
    //         "address": "https://dtm.uz/",
    //     },
    //     {
    //         "id": 6,
    //         "img":'salom',
    //         "text_uz": "Davtlat  test markazi",
    //         "address": "https://dtm.uz/",
    //     },
    //     {
    //         "id": 7,
    //         "img":'salom',
    //         "text_uz": "Davtlat  test markazi",
    //         "address": "https://dtm.uz/",
    //     }
    // ]

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <div className='sliderDiv myContainer'>
      <Swiper
      className='my'
        onSwiper={setSwiperRef}
        slidesPerView={4}
        // centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'none',
        }}
        navigation={true}
        virtual
      >
        {/* {slides.map((slideContent, index) => (
          <SwiperSlide className='mySlide' key={slideContent} virtualIndex={index}>
              <img src={img} alt="" />
            {slideContent}
          </SwiperSlide>
        ))} */}
        
        {top.map((slideContent, index) => (
            
              <SwiperSlide className='mySlide' key={slideContent} virtualIndex={index}>
                <img src={'https://politexapi.na4u.ru/public/storage/'+slideContent.img} alt="" />
                {slideContent.text_uz}
            </SwiperSlide>
        ))}
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
          Slide 500
        </button>
        <button onClick={() => append()} className="append-slides">
          Append Slide
        </button>
      </p> */}
    </div>
  );
}
