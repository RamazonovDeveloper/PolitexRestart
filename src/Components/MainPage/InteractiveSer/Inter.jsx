import React from 'react';
import './Inter.scss'
import '../TitleStyle.scss'
// import img from '../../../img/inimg.svg'
import photo from '../../../assets/icons/newInter.svg'
import mes from '../../../assets/icons/inmes.svg'
import book from '../../../assets/icons/inbook.svg'
import sms from '../../../assets/icons/insms.svg'
import air from '../../../assets/icons/airInter.svg'
import leaf from '../../../assets/icons/leaf2Inter.svg'
import rot from '../../../assets/icons/interRot.svg'
import rot2 from '../../../assets/icons/rot2.svg'
import cloud from '../../../assets/icons/cloudInter.svg'


const Inter = () => {
    return (
        <div className='in'>
            <div className='section__title'>
                <div className="section__title__container myContainer">
                    <h4 className='section__title__container__text'>Interaktiv Xizmatlar</h4>
                    <button className='section__title__container__link'>
                        Batafsil ma’lumot
                        <span></span>
                    </button>
                </div>
            </div>
            <div className='in__items myContainer'>
                <div className='in__items__cards'>
                    <div className='myCard'>
                        <img className='myCard__img' src={sms} alt="" />
                        <div className='myCard__text'>
                            <h5>Rektorning Virtual Qabulxonasi</h5>
                            <p>TDTU Rektorining virtual qabulxonasi</p>
                        </div>
                    </div>
                    <div className='myCard'>
                        <img className='myCard__img' src={book} alt="" />
                        <div className='myCard__text'>
                            <h5>Onlayn Kutubxona</h5>
                            <p>TDTU Onlayn Kutubxonasi</p>
                        </div>
                    </div>
                    <div className='myCard'>
                        <img className='myCard__img' src={mes} alt="" />
                        <div className='myCard__text'>
                            <h5>Korporativ Elektron Pochta</h5>
                            <p>TDTU Korporativ elektron pochtasi</p>
                        </div>
                    </div>
                    <div className='myCard'>
                        <img className='myCard__img' src={mes} alt="" />
                        <div className='myCard__text'>
                            <h5>Korporativ Elektron Pochta</h5>
                            <p>TDTU Korporativ elektron pochtasi</p>
                        </div>
                    </div>
                </div>
                <div className='in__items__img'>
                    <img className='big' src={photo} alt="" />
                    {/* <img className='big' src={photo} alt="" /> */}
                    <div className='airDiv'>
                    <img className='air' src={air} alt="" />
                    </div>
                    <img className='leaf' src={leaf} alt="" />
                    <img className='cloud' src={cloud} alt="" />
                    <img className='rot' src={rot} alt="" />
                    <img className='rot2' src={rot2} alt="" />
                    {/* <div></div> */}
                    {/* <img className='stat' src={stat} alt="" /> */}
                </div>
            </div>
            
        </div>
    );
}

export default Inter;
