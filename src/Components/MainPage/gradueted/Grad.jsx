import React from 'react';
import './Grad.scss'
import prez1 from '../../../assets/images/prez1.png'

const Grad = () => {
    return (
        <div className='grad'>
            <div className='section__title'>
                <div className="section__title__container myContainer">
                    <h4 className='section__title__container__text'>Bizning Bitiruvchilar</h4>
                </div>
            </div>
            
            <div className='grad__cards myContainer'>
                <div className="grad__cards__card">
                    <img src={prez1} alt="" />
                    <h5>Islom Karimov</h5>
                    <p>O’zbekiston Respublikasi birinchi prezidenti</p>
                </div>
                <div className="grad__cards__card">
                    <img src={prez1} alt="" />
                    <h5>Islom Karimov</h5>
                    <p>O’zbekiston Respublikasi birinchi prezidenti</p>
                </div>
                <div className="grad__cards__card">
                    <img src={prez1} alt="" />
                    <h5>Islom Karimov</h5>
                    <p>O’zbekiston Respublikasi birinchi prezidenti</p>
                </div>
                <div className="grad__cards__card">
                    <img src={prez1} alt="" />
                    <h5>Islom Karimov</h5>
                    <p>O’zbekiston Respublikasi birinchi prezidenti</p>
                </div>
                <div className="grad__cards__card">
                    <img src={prez1} alt="" />
                    <h5>Islom Karimov</h5>
                    <p>O’zbekiston Respublikasi birinchi prezidenti</p>
                </div>
            </div>
        </div>
    );
}

export default Grad;
