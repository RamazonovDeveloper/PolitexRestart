import React from 'react';
import back from '../../../assets/images/slider-back.png'
import slider1 from '../../../assets/images//slider1.png'
import './MSlider.scss'

const Mslider = () => {
    return (
        <div className='slider'>
            <div className='slider__back'>
                <img className='slider__back__img' src={back} alt="" />
            </div>
            <div className='slider__text container'>
                <div className='slider__text__left'>
                    <h4>Rektor va talaba-yoshlar uchrashuvi</h4>
                    <p>11-mart kuni soat 14:00 da Toshkent davlat texnika universiteti rektori Turabdjanov Sadritdin Maxamaddinovich boshchiligida universitet 1-kurs guruh sardorlari bilan uchrashuv bo‘lib o‘tdi</p>
                </div>
                <div className='slider__text__right'>
                    <img src={slider1} alt="" />
                </div>
            </div>
            {/* <img src={back} className='slider'></img> */}
        </div>
        
    );
}

export default Mslider;
