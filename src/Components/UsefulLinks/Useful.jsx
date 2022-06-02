import React from 'react';
import './Useful.scss'
import '../MainPage/TitleStyle.scss'
import dtm from '../../assets/icons/useDTM.svg'
import my from '../../assets/icons/useMy.svg'
import yosh from '../../assets/icons/useYosh.svg'    

const Useful = () => {
    return (
        <div className='use'>
            <div className='section__title'>
                <div className="section__title__container myContainer">
                    <h4 className='section__title__container__text'>Foydali Havolalar</h4>
                </div>
            </div>
            <div className='use__cards myContainer'>
                <div className='use__cards__card'>
                    <img className='use__cards__card__img1' src={dtm} alt="" />
                    <p>Davtlat test markazi</p>
                </div>
                <div className='use__cards__card'>
                    <img className='use__cards__card__img2' src={my} alt="" />
                    <p>My.gov.uz</p>
                </div>
                <div className='use__cards__card'>
                    <img className='use__cards__card__img3' src={yosh} alt="" />
                    <p>Yoshlar ittifoqi</p>
                </div>
                <div className='use__cards__card'>
                    <img className='use__cards__card__img4' src={yosh} alt="" />
                    <p>My.gov.uz</p>
                </div>
            </div>
        </div>
    );
}

export default Useful;
