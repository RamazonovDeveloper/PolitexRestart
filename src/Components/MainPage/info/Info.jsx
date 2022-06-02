import React from 'react';
import './Info.scss'

const Info = () => {
    return (
        <div className='myContainer infos'>
            <div className=" infos__item">
                <div className='infos__item__single'>
                    <h4>12</h4>
                    <p>Kafedralar</p>
                </div>
                <div className='infos__item__single'>
                    <h4>12</h4>
                    <p>Fakultetlar</p>
                </div>
                <div className='infos__item__single'>
                    <h4>12</h4>
                    <p>Professor O’qituvchilar</p>
                </div>
                <div className='infos__item__single'>
                    <h4>12</h4>
                    <p>Doktarantlar</p>
                </div>
                <div className='infos__item__single'>
                    <h4>12</h4>
                    <p>Talabalar</p>
                </div>
            </div>
        </div>
    );
}

export default Info;    
