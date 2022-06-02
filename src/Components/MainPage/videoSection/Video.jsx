import React from 'react';
import './Video.scss'
import img from '../../../assets/images/video.png'
import play from '../../../assets/icons/playInt.svg'

const Video = () => {
    return (
        <div className='video'>
            {/* salom */}
            <img className='first' src={img} alt="" />
            <div className='second'><img src={play} alt="" /></div>
        </div>
    );
}

export default Video;
