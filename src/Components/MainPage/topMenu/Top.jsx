import React from 'react';
import phone from '../../../assets/icons/top-phone.svg'
import mes from '../../../assets/icons/top-message.svg'
import gla from '../../../assets/icons/top-glasses.svg'
import gerb from '../../../assets/icons/top-gerb.svg'
import flag from '../../../assets/icons/top-flag.svg'
import music from '../../../assets/icons/top-music.svg'
import './Top.scss'

const Top = () => {
    return (
        <div className='top'>
            <div className='top__items container'>
                <div>
                    <img src={phone} alt="" />
                    +998 71 246-46-00
                </div>
                <div>
                    <img src={mes} alt="" />
                    tstu_info@tdtu.u
                </div>
                <img src={gla} alt="" />
                <img src={gerb} alt="" />
                <img src={flag} alt="" />
                <img src={music} alt="" />
            </div>
        </div>
    );
}

export default Top;
